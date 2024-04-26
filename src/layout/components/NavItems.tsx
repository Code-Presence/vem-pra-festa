import { Tooltip, IconButton } from "@material-tailwind/react";
import { Bell, Settings, User } from "lucide-react";
import { NotificationIcon } from "./NotificationIcon";

interface IItemWrapperProps {
  label: string;
  children: React.ReactNode;
}

const ItemWrapper = ({ label, children }: IItemWrapperProps) => {
  return (
    <Tooltip
      content={label}
      className="bg-white text-blue-gray-900 shadow-xl border z-50"
      placement="bottom"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 15 },
      }}
    >
      <IconButton placeholder="" variant="text" className="text-gray-800">
        {children}
      </IconButton>
    </Tooltip>
  );
};

function NavItems(): JSX.Element {
  return (
    <span className="flex gap-2">
      <NotificationIcon icon={<Bell />} />
      {/*
      <ItemWrapper label="Notificações">
       <Bell />
      </ItemWrapper>
       */}
      {/* */}
      <ItemWrapper label="Ajustes">
        <Settings />
      </ItemWrapper>
      {/* */}
      <ItemWrapper label="Perfil">
        <User />
      </ItemWrapper>
      {/* */}
    </span>
  );
}

export { NavItems };
