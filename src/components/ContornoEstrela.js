import React from 'react';
import ContornoEstrela from '../images/contorno-estrela.png';

class ContornoEstrelaComponente extends React.Component {
  render() {
    return (
      <div>
        <img src={ ContornoEstrela } alt="estrela de avaliação" />
        <img src={ ContornoEstrela } alt="estrela de avaliação" />
        <img src={ ContornoEstrela } alt="estrela de avaliação" />
        <img src={ ContornoEstrela } alt="estrela de avaliação" />
        <img src={ ContornoEstrela } alt="estrela de avaliação" />
      </div>
    );
  }
}
export default ContornoEstrelaComponente;
