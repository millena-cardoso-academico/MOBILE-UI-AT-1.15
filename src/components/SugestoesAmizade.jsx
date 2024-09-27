import PropTypes from 'prop-types';
import '../styles/SugestoesAmizade.css';

export default function SugestoesAmizade({ sugestoes }) {
  return (
    <div className="sugestoes-container">
      <h2 className="sugestoes-titulo">Sugestões de Amizade</h2>
      {sugestoes.map((sugestao, index) => (
        <div key={index} className="sugestao-item">
          <img src={sugestao.avatar} alt={sugestao.nome} />
          <div className="sugestao-info">
            <span className="sugestao-nome">{sugestao.nome}</span>
            <span className="amigos-em-comum">{sugestao.amigoComum} amigos em comum</span>
          </div>
        </div>
      ))}
    </div>
  );
}

SugestoesAmizade.propTypes = {
  sugestoes: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      amigoComum: PropTypes.number.isRequired,
    })
  ).isRequired,
};