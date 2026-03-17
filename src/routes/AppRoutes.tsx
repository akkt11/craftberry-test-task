import { Routes, Route } from "react-router";
import { HomePage } from "../pages";
import { Layout } from "../components/Layout";
import { QuizPage } from "../pages/QuizPage";

export const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/quiz/:id" element={<QuizPage />} />
    </Route>
  </Routes>
);
