import React from 'react';
import Autoconhecimento from '../components/Cards/Autoconhecimento';
import AutoestimaAutossabotagem from '../components/Cards/Autoestima';
import EscutaAjuda from '../components/Cards/EscutaAjuda';
import PerdaLuto from '../components/Cards/PerdaLuto';
import Relacionamentos from '../components/Cards/Relacionamentos';

function WhyTheraphy() {
  return (
    <div>
      <h1>Por que fazer terapia?</h1>
      <div>
        <ul>
          <li>
            <Autoconhecimento />
          </li>
          <li>
            <Relacionamentos />
          </li>
          <li>
            <AutoestimaAutossabotagem />
          </li>
          <li>
            <EscutaAjuda />
          </li>
          <li>
            <PerdaLuto />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WhyTheraphy;
