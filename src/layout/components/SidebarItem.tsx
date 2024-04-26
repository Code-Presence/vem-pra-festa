import { useNavigate, useLocation } from "react-router-dom";
import { Tooltip, Typography } from "@material-tailwind/react";
import React from "react";

interface ISidebarItemProps {
  path: string;
  label: string;
  hide: boolean;
  icon: React.ReactNode;
}

function SidebarItem({
  path,
  label,
  hide,
  icon,
}: ISidebarItemProps): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate(`/${path}`);
  };

  const convertedPath = `/${path}`;

  const currentPath = location.pathname;

  const isActive = convertedPath === currentPath;

  const sidebarItemContent = (
    <li
      className={`w-full flex items-center hover:bg-blue-gray-50/80 transition-all decoration-none py-3 px-2 gap-4 rounded-md text-black cursor-pointer list-none mb-2 ${hide ? "justify-center" : ""} ${isActive ? "bg-blue-gray-50/80" : ""}`}
      onClick={handleClick}
    >
      <span className="w-[2rem] h-[2rem] flex items-center justify-center text-gray-700">
        {icon}
      </span>
      {!hide && (
        <Typography
          placeholder=""
          variant="paragraph"
          className={`text-blue-gray-900 transition-all ${isActive && "font-bold"}`}
        >
          {label}
        </Typography>
      )}
    </li>
  );

  if (!hide) {
    return <>{sidebarItemContent}</>;
  }

  return (
    <Tooltip
      content={label}
      placement="right"
      className="bg-white text-blue-gray-900 shadow-xl border"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 15 },
      }}
    >
      {sidebarItemContent}
    </Tooltip>
  );
}

export { SidebarItem };
