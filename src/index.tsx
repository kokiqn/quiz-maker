import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/index.tsx';
import React from 'react';
import QuizContextProvider from './context/QuizContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QuizContextProvider>
      <RouterProvider router={router} />
    </QuizContextProvider>
  </React.StrictMode>
);
