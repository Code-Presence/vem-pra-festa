import { Button } from '@material-tailwind/react';
import { LoaderCircle } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

interface IUseLoginProps {
  user: string;
  password?: string;
  token?: string;
}

export const UseLogin = ({ user, password }: IUseLoginProps) => {
  const [disable, setDisable] = React.useState(false);
  const navigate = useNavigate();

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  const login = () => {
    localStorage.setItem('token', '123456');
    localStorage.setItem('user', user);

    if (user && password) {

      setDisable(true);

      Toast.fire({
        icon: 'success',
        title: 'Login realizado com sucesso',
        text: 'Você será redirecionado em instantes',
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          navigate('/home');
        }
      });
    } else {
      Toast.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha os campos obrigatórios',
      });
    }
  };

  return (
    <Button className="mt-4 flex items-center justify-center transition-all" placeholder="" fullWidth color="green" onClick={login} disabled={disable}>
      {disable ? <LoaderCircle className='animate-spin' /> : 'Acessar'}
    </Button>
  );
};