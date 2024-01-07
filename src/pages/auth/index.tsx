import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { mutationLogin } from './mutation';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../store/AuthProvider';

export type MutationData = {
  success: boolean;
  guest_session_id: string;
  expires_at: string;
};

const Auth = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const mutationOptions = {
    mutationKey: ['login'],
    mutationFn: mutationLogin,
    onSuccess: (data: MutationData) => {
      if (authContext) {
        const { setIsAuthenticated } = authContext;
        localStorage.setItem('guest_session_id', data.guest_session_id);
        setIsAuthenticated(true);
        navigate('/');
      }
    },
  };

  const { mutate } = useMutation<MutationData>(
    mutationOptions,
  ) as UseMutationResult<MutationData, unknown, void, unknown>;

  if (!authContext) {
    console.error('Context is null');
    return null;
  }

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
