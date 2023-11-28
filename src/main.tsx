import './styles/index.css';
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Loader from './components/Loader';

const AppRouter = lazy(() => import('./AppRouter'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Router>
        <Suspense fallback={<Loader />}>
          <AppRouter />
        </Suspense>
      </Router>
  </React.StrictMode>
);
