import React from 'react';
import Imagem1 from '../assets/images/01.jpeg';

function Main() {
  return (
    <div className="bg-light-green mx-auto py-10 px-40 flex items-center justify-center ">
      <div className="flex flex-col w-1/2 pr-32 my-28">
        <h1 className="font-title font-extrabold text-3xl mb-4">
          Psicoterapia pela Psicanálise
        </h1>
        <p className="pb-1">
          Descomplicando o autoconhecimento para te ajudar a viver de forma mais
          leve.
        </p>
        <p className="pb-1">Consultas online e presenciais.</p>
        <p>
          Psicóloga com foco de atuação em autoconhecimento, autoestima e
          relacionamentos.
        </p>
      </div>
      <img
        src={Imagem1}
        alt="Psicóloga Lethícia Fachetti"
        className="w-80 rounded-t-large border-4 border-rose-light "
      />
    </div>
  );
}

export default Main;
