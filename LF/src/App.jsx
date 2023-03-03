import React from 'react';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import WhyTheraphy from './pages/WhyTheraphy';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <WhyTheraphy />
    </>
  );
}

export default App;
