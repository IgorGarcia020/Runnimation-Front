import React from "react";
import { Container, Button } from "react-bootstrap";
import "./Info.css";
import banner from "../../../public/onePieceBanner.jpg";
import cover from "../../../public/onePieceCover.jpg";
import eye from "../../../public/eye.png"

function Info() {
  return (
    <Container fluid className="info">
      <div className="banner">
        <img src={banner} />
      </div>
      <div className="content">
        <div className="info-header">
          <div className="cover">
            <img src={cover} alt="" />
          </div>
          <div className="type-title">
            <div className="type">
              <p>Anime</p>
            </div>
            <div className="title">
              <h2>One Piece</h2>
            </div>
            <div className="data">
              <p>1999</p>
              <p>2 temporadas</p>
              <p>Aventura, Fantasía, Comedia</p>
              <p>☆ 9,0</p>
            </div>
          </div>
        </div>
        <div className="eye">
          <Button style={{backgroundColor: "transparent", border:"1px solid white",borderRadius:"50%", height:"45px" }}><img src={eye} alt="" style={{filter:"invert(1)", height:"30px", padding: "5px 0"}}/></Button>
        </div>
      </div>
    </Container>
  );
}

export default Info;
