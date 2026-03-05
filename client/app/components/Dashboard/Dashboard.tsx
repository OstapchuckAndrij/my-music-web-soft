//Dashboard.tsx
import { useState } from "react";
//Components
import { dashboardItems, ButtonType } from "./DashboadFactory";
import { ChevronRight, ChevronLeft } from "lucide-react";
import DashboardButton from "./DashboardButton";
//Hooks
import { useNavigate } from "react-router";

export default function Dashboard() {
  const navigate = useNavigate();

  const [isExpanded, setIsExpanded] = useState(false);

  const handleNavigation = (path?: string) => {
    navigate(path || "/");
  };

  const homeButton = dashboardItems.find(
    (item) => item.type === ButtonType.HOME,
  );

  return (
    <aside
      className={`
        bg-neutral-900 border-r border-neutral-800 transition-all duration-300 p-3 flex flex-col
        ${isExpanded ? "w-52" : "w-18"} 
      `}
    >
      <div className="mb-4 flex flex-row items-center justify-between">
        {/* Кнопка перемикання (Toggle) */}
        <button
          key={"21313r2x"}
          onClick={() => setIsExpanded(!isExpanded)}
          className=" p-3 hover:bg-neutral-800 rounded-lg self-center"
        >
          {isExpanded ? <ChevronLeft /> : <ChevronRight />}
        </button>

        <DashboardButton
          icon={homeButton?.icon}
          isExpanded={isExpanded}
          isFullExpanded={true}
          onClick={() => handleNavigation(homeButton?.to)}
        />
      </div>

      <div className="flex flex-col justify-between h-full">
        {/* Навігаційні кнопки зверху */}
        <nav className="flex flex-col gap-2">
          {dashboardItems
            .filter((item) => item.type === ButtonType.NAV)
            .map((item) => (
              <DashboardButton
                icon={item.icon}
                label={item.label}
                isExpanded={isExpanded}
                onClick={() => handleNavigation(item.to)}
              />
            ))}
        </nav>
        {/* Налаштування та інші кнопки знизу */}
        <nav className="flex flex-col gap-2 mt-auto">
          {dashboardItems
            .filter((item) => item.type === ButtonType.SETTING)
            .map((item) => (
              <DashboardButton
                key={item.id}
                icon={item.icon}
                label={item.label}
                isExpanded={isExpanded}
                onClick={() => handleNavigation(item.to)}
              />
            ))}
        </nav>
      </div>
    </aside>
  );
}
