import React from "react";
import "./Home.css";
import { Container } from "react-bootstrap";
import Banner from "./Banner";
import Upcoming from "./Upcoming/Upcoming";
import Releases from "./Releases/Releases";
import Friends from "./Friends/Friends";
import Trending from "./Trending/Trending";
import Rating from "./Rating/Rating";
import Series from "./Series/Series";
import Movies from "./Movies/Movies";

import Cartoon from "./Cartoon/Cartoon";
import Anime from "./Anime/Anime";

const heroShows = [
  {
    title: "One Piece",
    type: "Anime",
    synopsis:
      "Monkey D. Luffy se niega a que nadie se interponga en su camino hacia convertirse en el rey de los piratas.",
    backdrop: "/onePiece.png",
  },
  {
    title: "Frieren",
    type: "Anime",
    synopsis:
      "Una elfa maga reflexiona sobre el tiempo tras la muerte de sus compañeros de aventura.",
    backdrop: "/frieren.png",
  },
  {
    title: "Severance",
    type: "Serie",
    synopsis:
      "Los empleados de Lumon separan sus recuerdos entre el trabajo y su vida personal.",
    backdrop: "/severance.jpg",
  },
  {
    title: "Arcane",
    type: "Serie",
    synopsis:
      "Dos hermanas separadas por un conflicto que amenaza con destruir su ciudad.",
    backdrop: "/arcane.jpg",
  },
  {
    title: "Gravity Falls",
    type: "Dibujos",
    synopsis:
      "Dos hermanos pasan el verano con su tío abuelo en un pueblo lleno de misterios.",
    backdrop: "/gravityFalls.jpg",
  },
];
function Home() {
  return (
    <Container fluid className="home">
      <div>
        <Banner shows={heroShows} />
        <h2>Próximos Estrenos</h2>
        <Upcoming />
        <h2>Estrenos Recientes</h2>
        <Releases />
        <h2>Actividad de Amigos</h2>
        <Friends />
        <h2>Destacadas</h2>
        <Trending />
        <h2>Mejor Puntuadas</h2>
        <Rating />
        <h2>Peliculas</h2>
        <Movies />
        <h2>Series</h2>
        <Series />
        <h2>Dibujos</h2>
        <Cartoon />
        <h2>Anime</h2>
        <Anime />
      </div>
    </Container>
  );
}

export default Home;
