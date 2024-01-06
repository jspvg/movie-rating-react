import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { mutationLogin } from './mutation';
import { useNavigate } from 'react-router-dom';

export type MutationData = {
  success: boolean;
  guest_session_id: string;
  expires_at: string;
};

const Auth = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation<MutationData>({
    mutationKey: ['login'],
    mutationFn: mutationLogin,
    onSuccess: (data) => {
      localStorage.setItem('guest_session_id', data.guest_session_id);
      navigate('/');
    },
  }) as UseMutationResult<MutationData, unknown, void, unknown>;

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    mutate();
  };

  return (
    <div className="auth-page">
      <h4>Login as a Guest below</h4>
      <form>
        <button onClick={(e) => handleLogin(e)}>Login</button>
      </form>
    </div>
  );
};

export default Auth;
