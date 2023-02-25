import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function Button() {
  return (
    <div className="flex items-center justify-center flex-nowrap">
      <button
        type="button"
        className="flex flex-nowrap whitespace-nowrap items-center content-center rounded-lg cursor-pointer text-center font-bold text-2xl bg-cream-light 
        sm:mt-4 sm:py-2 sm:px-3 sm:text-xl"
      >
        <FaWhatsapp className="w-10 h-10 mr-4 items-center content-center text-center" />
        Agende uma consulta
      </button>
    </div>
  );
}

export default Button;
