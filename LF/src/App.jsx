import React from 'react';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Benefits from './pages/Benefits/Benefits';
import Main from './pages/Main/Main';
import Review from './pages/Reviews/Review';
import WhyTheraphy from './pages/WhyTheraphy/WhyTheraphy';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <WhyTheraphy />
      <About />
      <Benefits />
      <Review />
    </>
  );
}

export default App;
