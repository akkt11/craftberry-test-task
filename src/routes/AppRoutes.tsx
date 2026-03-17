import { Routes, Route } from "react-router";
import { HomePage } from "../pages";
import { Layout } from "../components/Layout";
import { QuizPage } from "../pages/QuizPage";
import { ResultPage } from "../pages/ResultPage";

export const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/quiz/:id" element={<QuizPage />} />
      <Route path="/results" element={<ResultPage />} />
    </Route>
  </Routes>
);
