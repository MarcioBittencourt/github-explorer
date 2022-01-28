import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesApp from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <RoutesApp />
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
