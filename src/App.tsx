import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Auth from './pages/auth';
import Home from './pages/home';
import Rated from './pages/rated';
import Root from './pages/Root';
import './App.css';
import '../src/styles/components.scss';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './store/AuthProvider';
import { PageNotFound } from './pages/404';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      { path: 'auth', element: <Auth /> },
      {
        path: 'rated',
        element: (
          <PrivateRoute>
            <Rated />
          </PrivateRoute>
        ),
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>
  );
}

export default App;
