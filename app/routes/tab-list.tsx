import type { Route } from "./+types/home";
import Layout from "../layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tabs" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Tabs() {
  
  return (
      <div className="flex-1 flex-col justify-center align-middle text-white">
        <p className="text-white font-bold font-">There is not still any song :(</p>
      </div>
)}
