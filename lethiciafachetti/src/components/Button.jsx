import React from 'react';

export default function Button() {
  function handleClink(e) {
    e.preventDefault();
    console.log('Fui Clicado');
  }

  return <button onClick={handleClick}>Agende uma consulta</button>;
}
