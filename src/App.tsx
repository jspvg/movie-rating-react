import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Auth from './pages/auth';
import Home from './pages/home';
import Rated from './pages/rated';
import Root from './pages/Root';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: 'auth', element: <Auth /> },
      { path: 'rated', element: <Rated /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
