import { useState } from "react";
import { Button, CircularProgress, Typography } from "../../Elements";
import "./quiz.scss";
import { ArrowRight } from "../../../assets/Icons";
import { useNavigate, useParams } from "react-router";
import { QUESTIONS } from "../../../common";

interface QuizProps {
  id: number;
  question: string;
  options: string[];
}

export const Quiz = ({ options, question }: Partial<QuizProps>) => {
  const { id: paramId = "" } = useParams();
  const navigateTo = useNavigate();

  const [selected, setSelected] = useState<string[]>([]);

  const toggleQuestion = (option: string) => {
    if (selected.includes(option)) {
      return setSelected((prev) => prev.filter((value) => value !== option));
    }

    setSelected((prev) => [...prev, option]);
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
                intent="inner"
                className={`quiz-questions__option ${foundOption ? "active" : ""}`}
                onClick={() => toggleQuestion(option)}
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
