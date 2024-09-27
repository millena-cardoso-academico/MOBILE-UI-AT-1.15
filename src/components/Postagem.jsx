import { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton, Avatar, TextField } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import Comentarios from './Comentarios';
import '../styles/Postagem.css';

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

export default function Postagem({ imagem, titulo, texto, data, autor, curtidas, compartilhamentos, comentarios }) {
  const [mostrarComentarios, setMostrarComentarios] = useState(false);
  const [novoComentario, setNovoComentario] = useState('');
  const [todosComentarios, setTodosComentarios] = useState(comentarios);
  const [curtido, setCurtido] = useState(false);
  const [contadorCurtidas, setContadorCurtidas] = useState(curtidas);

  const handleComentarioToggle = () => {
    setMostrarComentarios(!mostrarComentarios);
  };

  const handleAdicionarComentario = () => {
    if (novoComentario.trim()) {
      setTodosComentarios([...todosComentarios, { autor: 'Você', texto: novoComentario }]);
      setNovoComentario('');
    }
  };

  const handleCurtirToggle = () => {
    setCurtido(!curtido);
    setContadorCurtidas(curtido ? contadorCurtidas - 1 : contadorCurtidas + 1);
  };

  return (
    <div className="postagem-container">
      <div className="postagem-content">
        <img src={imagem} alt={titulo} className="postagem-imagem" />
        <div className="postagem-header">
          <Avatar src={amigos[autor]} className="postagem-avatar" />
          <div>
            <h2 className="postagem-titulo">{titulo}</h2>
            <p className="postagem-data">{autor} • {data}</p>
          </div>
        </div>
        <p className="postagem-texto">{texto}</p>
      </div>
      <div className="postagem-actions">
        <IconButton className="icon" onClick={handleCurtirToggle}>
          {curtido ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon color="error" />}
        </IconButton>
        <span>{contadorCurtidas} curtidas</span>

        <IconButton className="icon">
          <ShareIcon color="primary" />
        </IconButton>
        <span>{compartilhamentos} compartilhamentos</span>

        <IconButton className="icon" onClick={handleComentarioToggle}>
          <CommentIcon style={{ color: 'purple' }} />
        </IconButton>
        <span>{todosComentarios.length} comentários</span>
      </div>

      {mostrarComentarios && (
        <div className="comentarios-section">
          <Comentarios comentarios={todosComentarios} />
          <div className="comentario-novo">
            <TextField
              label="Escreva um comentário"
              variant="outlined"
              fullWidth
              value={novoComentario}
              onChange={(e) => setNovoComentario(e.target.value)}
              InputProps={{ style: { fontFamily: 'Cutive Mono, monospace' } }}
            />
            <button onClick={handleAdicionarComentario} className="btn-adicionar-comentario">Comentar</button>
          </div>
        </div>
      )}
    </div>
  );
}

Postagem.propTypes = {
  imagem: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired,
  curtidas: PropTypes.number.isRequired,
  compartilhamentos: PropTypes.number.isRequired,
  comentarios: PropTypes.arrayOf(
    PropTypes.shape({
      autor: PropTypes.string.isRequired,
      texto: PropTypes.string.isRequired,
    })
  ).isRequired,
};