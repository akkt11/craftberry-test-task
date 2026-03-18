import { useState } from "react";
import { Button, CircularProgress, Typography } from "../../Elements";
import "./quiz.scss";
import { ArrowRight } from "../../../assets/Icons";
import { useNavigate, useParams } from "react-router";
import { ANSWERS_KEY, QUESTIONS } from "../../../common";
import useLocalStorage from "../../Hooks/useLocalStorage";

interface QuizProps {
  id: number;
  question: string;
  options: string[];
}

export const Quiz = ({ options, question }: Partial<QuizProps>) => {
  const { id: paramId = "" } = useParams();
  const navigateTo = useNavigate();

  const { storedValue: answers, setValue: setAnswers } = useLocalStorage<
    Record<string, string[]>
  >(ANSWERS_KEY, {});

  const [selected, setSelected] = useState<string[]>(answers[paramId] ?? []);

  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      setSelected((prev) => prev.filter((value) => value !== option));

      setAnswers((prev) => {
        const updated = {
          ...prev,
          [paramId]: prev[paramId].filter((value) => value !== option),
        };

        return updated;
      });

      return;
    }

    setSelected((prev) => [...prev, option]);

    const updated = {
      ...answers,
      [paramId]: [...(answers[paramId] ?? []), option],
    };

    setAnswers(updated);
    localStorage.setItem(ANSWERS_KEY, JSON.stringify(updated));
  };

  const handleNext = () => {
    if (!selected.length) return;

    if (parseInt(paramId) < QUESTIONS.length) {
      navigateTo(`/quiz/${parseInt(paramId) + 1}`);
    } else {
      navigateTo("/results");
    }
  };

  const handleBack = () => {
    if (parseInt(paramId) === 1) {
      navigateTo("/");
    } else {
      navigateTo(`/quiz/${parseInt(paramId) - 1}`);
    }
  };

  return (
    <div className="quiz-game">
      <div className="quiz-questions">
        <Typography variant="h2" className="quiz-questions__question">
          {question}
        </Typography>

        <div className="quiz-questions__options">
          {options?.map((option, index) => {
            const getLabel = String.fromCharCode(97 + index);
            const foundOption = selected.includes(option);

            return (
              <Button
                key={index}
                intent="inner"
                className={`quiz-questions__option ${foundOption ? "active" : ""}`}
                onClick={() => toggleOption(option)}
              >
                {`${getLabel}. ${option}`}
              </Button>
            );
          })}
        </div>

        <div className="quiz-questions__buttons">
          <Button intent="ghost" onClick={handleBack}>
            Back
          </Button>

          <Button className="quiz-questions__button" onClick={handleNext}>
            Next question
            <ArrowRight />
          </Button>
        </div>
      </div>

      <CircularProgress current={parseInt(paramId)} total={QUESTIONS.length} />
    </div>
  );
};
