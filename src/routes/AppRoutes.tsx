import { Routes, Route } from "react-router";
import { Layout } from "../components";
import { HomePage } from "../pages";

export const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<HomePage />} />
    </Route>
  </Routes>
);
