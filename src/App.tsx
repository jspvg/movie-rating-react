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
import { Movie } from './pages/movie';
import { TVShow } from './pages/tvshow';

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
        path: '/movie/:id',
        element: (
          <PrivateRoute>
            <Movie />
          </PrivateRoute>
        ),
      },
      {
        path: '/tvshow/:id',
        element: (
          <PrivateRoute>
            <TVShow />
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
