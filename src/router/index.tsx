import { createBrowserRouter, Navigate } from 'react-router-dom';
import CreateQuiz from '../views/CreateQuiz';
import Results from '../views/Results';

const routesMap = {
  createQuiz: '/create-quiz',
  results: '/results',
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/create-quiz" replace />,
  },
  {
    path: routesMap.createQuiz,
    element: <CreateQuiz />,
  },
  {
    path: routesMap.results,
    element: <Results />,
  },
]);

export { router, routesMap };
