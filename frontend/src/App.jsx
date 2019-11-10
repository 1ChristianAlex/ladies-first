import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/GlobalStyle';
import Store from './context/provider';

function App() {
  return (
    <>
      <Store>
        <GlobalStyle />
        <Routes />
      </Store>
    </>
  );
}

export default App;
