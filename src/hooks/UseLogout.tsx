import { Button } from '@material-tailwind/react';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface IUseLogoutProps {
  isSideOpen: boolean;
}

export const UseLogout = ({ isSideOpen }: IUseLogoutProps) => {
  const navigate = useNavigate();

  const logout = (): void => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    navigate('/login');
  };

  return (
    <Button
      placeholder=""
      variant="text"
      color="red"
      className="flex items-center gap-4 justify-center"
      onClick={logout}
    >
      {isSideOpen && 'Sair'}
      <span
        className={`${!isSideOpen && 'w-[2rem] h-[2rem]'} flex items-center justify-center`}
      >
        <LogOut />
      </span>
    </Button>
  );
};