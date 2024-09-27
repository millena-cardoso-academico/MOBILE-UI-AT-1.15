import PropTypes from 'prop-types';
import '../styles/ListaAmigos.css';

export default function ListaAmigos({ amigos }) {
  return (
    <div className="amigos-container">
      <h2 className="amigos-titulo">Lista de Amigos</h2>
      {amigos.map((amigo, index) => (
        <div key={index} className="amigo-item">
          <img src={amigo.avatar} alt={amigo.nome} />
          <div className="amigo-info">
            <span className="amigo-nome">{amigo.nome}</span>
            <span className="amigos-em-comum">{amigo.amigosComum} amigos em comum</span>
          </div>
        </div>
      ))}
    </div>
  );
}

ListaAmigos.propTypes = {
  amigos: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      amigosComum: PropTypes.number.isRequired,
    })
  ).isRequired,
};