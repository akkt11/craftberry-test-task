import { Routes, Route } from "react-router";
import { HomePage } from "../pages";
import { Layout } from "../components/Layout";

export const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<HomePage />} />
    </Route>
  </Routes>
);
