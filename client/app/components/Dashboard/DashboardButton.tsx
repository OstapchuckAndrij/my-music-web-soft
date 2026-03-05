export interface DashboardButtonProps {
  icon: React.ReactNode;
  label?: string;
  isExpanded: boolean;
  isFullExpanded?: boolean;
  onClick?: () => void;
}

// Допоміжний компонент для кнопки
export default function DashboardButton({
  icon,
  label,
  isExpanded,
  isFullExpanded = false,
  onClick,
}: DashboardButtonProps) {
  return (
    <button
      className={`
        flex items-center p-3 hover:bg-emerald-600 
        rounded-lg transition-colors overflow-hidden 
        whitespace-nowrap  transition-all duration-300 
        ease-in-out group 
        ${
          !isFullExpanded
            ? "w-full"
            : isExpanded
              ? "max-w-xs opacity-100"
              : "max-w-0 opacity-0"
        }`}
      onClick={onClick}
    >
      <div className="w-6 h-6 flex">{icon}</div>

      {/* Анімований текст */}
      {label && (
        <span
          className={`
            overflow-hidden whitespace-nowrap transition-all 
            duration-300 ease-in-out
        ${isExpanded ? "max-w-xs ml-4 opacity-100" : "max-w-0 opacity-0"}
      `}
        >
          {label}
        </span>
      )}
    </button>
  );
}
