import { Outlet } from "react-router";
import Dashboard from "./components/Dashboard/Dashboard";

export default function Layout() {
  return (
    <div className="flex min-h-screen">
      <Dashboard />
      {/* main content area where child routes render */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
