import Postagem from './components/Postagem';
import ListaAmigos from './components/ListaAmigos';
import Header from './components/Header';
import SugestoesAmizade from './components/SugestoesAmizade';
import './styles/App.css';

import friend1 from './images/amigos/friend1.jpg';
import friend2 from './images/amigos/friend2.jpg';
import friend3 from './images/amigos/friend3.jpg';
import friend4 from './images/amigos/friend4.jpg';
import friend5 from './images/amigos/friend5.jpg';
import friend6 from './images/amigos/friend6.jpg';
import friend7 from './images/amigos/friend7.jpg';
import friend8 from './images/amigos/friend8.jpg';
import friend9 from './images/amigos/friend9.jpg';
import friend10 from './images/amigos/friend10.jpg';

import postagem1 from './images/postagens/postagem1.jpg';
import postagem2 from './images/postagens/postagem2.jpg';
import postagem3 from './images/postagens/postagem3.jpg';
import postagem4 from './images/postagens/postagem4.webp';
import postagem5 from './images/postagens/postagem5.jpg';

import sugestion1 from './images/sugestoes/sugestion1.jpg';
import sugestion2 from './images/sugestoes/sugestion2.jpg';
import sugestion3 from './images/sugestoes/sugestion3.jpg';
import sugestion4 from './images/sugestoes/sugestion4.jpg';
import sugestion5 from './images/sugestoes/sugestion5.jpg';

export default function App() {
  const sections = ["Meus Grupos", "Tendências", "Suporte"];

  const postagens = [
    {
      imagem: postagem1,
      titulo: 'Começando no Crochê: Primeiros Passos',
      texto: 'Hoje foi dia de aprender o básico do crochê! Comecei com o ponto correntinha e tô amando, super relaxante.',
      data: '21 de setembro de 2024',
      autor: 'Camila Vieira',
      curtidas: 50,
      compartilhamentos: 12,
      comentarios: [
        { autor: 'Mayara Nunes', texto: 'Mds, isso é mto fofoooo 😍', autorAvatar: friend2 },
        { autor: 'Carlos Lobo', texto: 'Aí sim, Camila! Tá arrasando já!', autorAvatar: friend3 },
        { autor: 'Daniela Rocha', texto: 'Só vai! Crochê é vida, amiga!', autorAvatar: friend7 }
      ]
    },
    {
      imagem: postagem2,
      titulo: 'Ursinho de Crochê Feito!',
      texto: 'Finalmente terminei meu primeiro amigurumi! Fiz um ursinho e ficou a coisa mais fofa.',
      data: '20 de setembro de 2024',
      autor: 'Mayara Nunes',
      curtidas: 72,
      compartilhamentos: 22,
      comentarios: [
        { autor: 'Camila Vieira', texto: 'Aaaa q ursinho lindooo! 🤩', autorAvatar: friend1 },
        { autor: 'Carlos Lobo', texto: 'Mano, mt daora! 👏', autorAvatar: friend3 },
        { autor: 'Marcel Santos', texto: 'Topzera! 👌', autorAvatar: friend4 }
      ]
    },
    {
      imagem: postagem3,
      titulo: 'Tapete de Crochê Colorido',
      texto: 'Acabei meu tapete de crochê cheio de cor, ficou show na sala!',
      data: '19 de setembro de 2024',
      autor: 'Carlos Lobo',
      curtidas: 80,
      compartilhamentos: 19,
      comentarios: [
        { autor: 'Kiara Kim', texto: 'Nossa, mto vibes! Amei as cores 😍', autorAvatar: friend6 },
        { autor: 'Marcel Santos', texto: 'Tapetão estiloso demais! 👏👏', autorAvatar: friend4 },
        { autor: 'Daniela Rocha', texto: 'Arrasou demais, tá mto top!', autorAvatar: friend7 }
      ]
    },
    {
      imagem: postagem4,
      titulo: 'Testando Novos Pontos',
      texto: 'Hoje testei o ponto pipoca, ficou lindo numa manta! Amo como crochê é versátil.',
      data: '18 de setembro de 2024',
      autor: 'Marcel Santos',
      curtidas: 64,
      compartilhamentos: 13,
      comentarios: [
        { autor: 'Nadia Jung', texto: 'Ponto pipoca = mt estiloso! Show demais!', autorAvatar: friend5 },
        { autor: 'Daniela Rocha', texto: 'Q chique! Deve ter ficado lindona!', autorAvatar: friend7 },
        { autor: 'Carlos Lobo', texto: 'Adoro esse ponto, sempre dá um toque massa.', autorAvatar: friend3 }
      ]
    },
    {
      imagem: postagem5,
      titulo: 'Cachecol de Crochê Quentinho',
      texto: 'Fiz esse cachecol super quentinho e estiloso! Perfeito pro inverno que vem.',
      data: '17 de setembro de 2024',
      autor: 'Nadia Jung',
      curtidas: 90,
      compartilhamentos: 27,
      comentarios: [
        { autor: 'Marcel Santos', texto: 'Mds, esse cachecol tá mto top 🔥', autorAvatar: friend4 },
        { autor: 'Mayara Nunes', texto: 'Só sucesso com esse cachecol lindão!', autorAvatar: friend2 },
        { autor: 'Camila Vieira', texto: 'Isso vai bombar no frio, arrasou!', autorAvatar: friend1 }
      ]
    }
  ];

  const amigos = [
    { nome: 'Camila Vieira', avatar: friend1, amigosComum: 1 },
    { nome: 'Mayara Nunes', avatar: friend2, amigosComum: 0 },
    { nome: 'Carlos Lobo', avatar: friend3, amigosComum: 4 },
    { nome: 'Marcel Santos', avatar: friend4, amigosComum: 2 },
    { nome: 'Nadia Jung', avatar: friend5, amigosComum: 1 },
    { nome: 'Kiara Kim', avatar: friend6, amigosComum: 7 },
    { nome: 'Daniela Rocha', avatar: friend7, amigosComum: 3 },
    { nome: 'Lara Lopes', avatar: friend8, amigosComum: 1 },
    { nome: 'Laís Inácio', avatar: friend9, amigosComum: 7 },
    { nome: 'Nathan Bueno', avatar: friend10, amigosComum: 1 },
  ];

  const sugestoes = [
    { nome: 'Marcos Silva', avatar: sugestion1, amigoComum: 'Camila Vieira' },
    { nome: 'Sara Vieira', avatar: sugestion2, amigoComum: 'Mayara Nunes' },
    { nome: 'Ana Lovato', avatar: sugestion3, amigoComum: 'Carlos Lobo' },
    { nome: 'Breno Pascal', avatar: sugestion4, amigoComum: 'Marcel Santos' },
    { nome: 'Zyara Santos', avatar: sugestion5, amigoComum: 'Nadia Jung' },
  ];

  return (
    <div className="App">
      <Header sections={sections} />
      <div className="container">
        <div className="feed">
          {postagens.map((postagem, index) => (
            <Postagem key={index} {...postagem} />
          ))}
        </div>
        <div className="sidebar">
          <ListaAmigos amigos={amigos} />
          <SugestoesAmizade sugestoes={sugestoes} />
        </div>
      </div>
    </div>
  );
}
