import { createHashRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Privacy from './pages/Privacy';

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'privacy', element: <Privacy /> }
    ]
  }
]);
