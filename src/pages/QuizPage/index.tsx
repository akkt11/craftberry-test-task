import { useParams } from "react-router";
import { QUESTIONS } from "../../common";
import { Quiz } from "../../components/Shared";
import "./quiz-page.scss";

export const QuizPage = () => {
  const { id: paramId = "" } = useParams();

  const question = QUESTIONS.find(({ id }) => id === parseInt(paramId));

  return (
    <section className="quiz">
      <Quiz key={question?.id} {...question} />
    </section>
  );
};
