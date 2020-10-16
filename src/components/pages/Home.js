import React from "react";
import jfarrish from "../img/JFarrish.jpg"
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import "./styles/home_style.css";


function Home() {
  return (

    <section className="" alt="this contains and pushes the main content in/our when you resize">
      <Jumbotron className="jumbotron text-left myAdj" id="addDarkGrey">
        <Container className="container border rounded border border-dark bg-white ">
          <div>
            <h1>Home Page</h1>

            <img className="floatImgLeft" src={jfarrish} alt="Joe Farrish" />

            <p> Hello, my name is Joe Farrish. I’m originally from Rio Rico, Az - a small town just north of the US border town of
            Nogales, Az. It’s an interesting place with good warm people and great Mexican food. I currently live in Green Valley,
            Az and consider myself a Tucsonian. </p>

            <p>Currently I've been working with Javascript and Web development technologies such as MERN stack (Mongo Db, Express Server, React, Node.js),
            HTML, CSS, jQuery and otherWeb Development libraries. I also know C++ and the Qt Framework and actually built my own application. I hope to 
            find a position that will allow me to focus on new technologies and where I can contribute along side a diverse set of people who want to
            work to make the world we live in a better place.</p>

            <p>I like coding Front End as well as backend and feel I'm a flexiable asset in this respect. I think a position where Javascript is needed is a 
            great place for me to be. With that said, I'm always open to learn new langauges and technologies.</p>

            <p>Please feel free to check out my portfolio and contact me. Thank you for checking out my portfolio. Sincerly, Joe Farrish</p>

          </div>
        </Container>
      </Jumbotron>
    </section>

  );
}

export default Home;
