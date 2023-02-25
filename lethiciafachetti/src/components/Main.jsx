import React from 'react';
import Imagem1 from '../assets/images/01.jpeg';
import Button from './Button';

function Main() {
  return (
    <div className="bg-green-light mx-auto py-10 px-40">
      <div className="container flex flex-col justify-center items-center md:flex-row">
        <div className="flex flex-col md:mr-10 lg:mr-32">
          <h1 className="font-title font-extrabold text-2xl mb-4 whitespace-nowrap">
            Psicoterapia pela Psicanálise
          </h1>
          <div className="font-semibold text-center w-[340px] lg:text-left lg:w-[400px]">
            <p className="mb-1">
              Descomplicando o autoconhecimento <br /> para te ajudar a viver de
              forma mais leve.
            </p>
            <p className="mb-1">Consultas online e presenciais.</p>
            <p className="mb-1">
              Psicóloga com foco de atuação em autoconhecimento, autoestima e
              relacionamentos.
            </p>
          </div>
          <Button />
        </div>
        <img
          src={Imagem1}
          alt="Psicóloga Lethícia Fachetti"
          className="hidden md:block w-80 rounded-t-[130px] border-4 border-rose-light ml-8"
        />
      </div>
    </div>
  );
}

export default Main;
