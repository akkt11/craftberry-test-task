import { useNavigate, useParams } from "react-router";
import { QUESTIONS } from "../../common";
import { Quiz } from "../../components/Shared";
import "./quiz-page.scss";
import { useEffect } from "react";

export const QuizPage = () => {
  const navigateTo = useNavigate();
  const { id: paramId = "" } = useParams();

  const question = QUESTIONS.find(({ id }) => id === parseInt(paramId));

  useEffect(() => {
    if (!question) {
      navigateTo("/");
    }
  }, [question]);

  return (
    <section className="quiz">
      <Quiz key={question?.id} {...question} />
    </section>
  );
};
