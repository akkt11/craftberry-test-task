import { Outlet } from "react-router";
import "./layout.scss";

export const Layout = () => {
  return (
    <main className="main">
      <Outlet />
    </main>
  );
};
