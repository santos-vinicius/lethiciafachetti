import React from 'react';
import Imagem from '../../assets/images/01.jpeg';
import WhatsappButton from '../../components/WhatsappButton/WhatsappButton';
import './Main.css';

function Main() {
  return (
    <div className="main">
      <div className="container">
        <div className="content">
          <h1>Psicoterapia pela Psicanálise</h1>
          <div className="content-text">
            <p>
              Descomplicando o autoconhecimento para te ajudar a viver de forma
              mais leve. <br />
              Consultas online e presenciais. <br />
              Psicóloga com foco de atuação em autoconhecimento, autoestima e
              relacionamentos.
            </p>
          </div>
          <WhatsappButton className="button" />
        </div>
        <img src={Imagem} alt="Psicóloga Lethícia Fachetti" className="image" />
      </div>
    </div>
  );
}

export default Main;
