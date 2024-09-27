import PropTypes from 'prop-types';
import { Avatar } from '@mui/material';
import '../styles/Comentarios.css';

import friend1 from '../images/amigos/friend1.jpg';
import friend2 from '../images/amigos/friend2.jpg';
import friend3 from '../images/amigos/friend3.jpg';
import friend4 from '../images/amigos/friend4.jpg';
import friend5 from '../images/amigos/friend5.jpg';
import friend6 from '../images/amigos/friend6.jpg';
import friend7 from '../images/amigos/friend7.jpg';
import friend8 from '../images/amigos/friend8.jpg';
import friend9 from '../images/amigos/friend9.jpg';
import friend10 from '../images/amigos/friend10.jpg';

const amigos = {
  'Camila Vieira': friend1,
  'Mayara Nunes': friend2,
  'Carlos Lobo': friend3,
  'Marcel Santos': friend4,
  'Nadia Jung': friend5,
  'Kiara Kim': friend6,
  'Daniela Rocha': friend7,
  'Lara Lopes': friend8,
  'Laís Inácio': friend9,
  'Nathan Bueno': friend10,
};

export default function Comentarios({ comentarios }) {
  return (
    <div className="comentarios">
      {comentarios.map((comentario, index) => (
        <div key={index} className="comentario">
          <Avatar src={amigos[comentario.autor]} className="comentario-avatar" />
          <div className="comentario-texto">
            <strong>{comentario.autor}</strong>: {comentario.texto}
          </div>
        </div>
      ))}
    </div>
  );
}

Comentarios.propTypes = {
  comentarios: PropTypes.arrayOf(
    PropTypes.shape({
      autor: PropTypes.string.isRequired,
      texto: PropTypes.string.isRequired,
    })
  ).isRequired,
};