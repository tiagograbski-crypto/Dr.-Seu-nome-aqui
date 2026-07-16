import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './app/LandingPage';
import './styles/index.css';

import ErrorBoundary from './components/layout/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <LandingPage />
    </ErrorBoundary>
  </React.StrictMode>,
);
