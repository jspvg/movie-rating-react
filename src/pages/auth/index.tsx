import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../store/AuthProvider';
import { AuthMutationData } from '../../utils/types';
import { mutationLogin } from '../../utils/api/mutations';

const Auth = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const mutationOptions = {
    mutationKey: ['login'],
    mutationFn: mutationLogin,
    onSuccess: (data: AuthMutationData) => {
      if (authContext) {
        const { setIsAuthenticated } = authContext;
        localStorage.setItem('guest_session_id', data.guest_session_id);
        setIsAuthenticated(true);
        navigate('/');
      }
    },
  };

  const { mutate } = useMutation<AuthMutationData>(
    mutationOptions,
  ) as UseMutationResult<AuthMutationData, unknown, void, unknown>;

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
