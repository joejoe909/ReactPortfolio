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

            <p>Currently I've been working with Javascript and Web development technologies such as HTML, CSS, jQuery and other
            Web Development libraries. I also know C++ and the Qt Framework and actually built my own application. I hope to find a
            Job that will push me to learn new technologies and where I can contribute along side a diverse set of people who want to
            work to make the world we live in a better place.</p>

            <p>I like coding GUI stuff and even do dabble with some graphic design. I think a position where Javascript is needed is a great
            place for me to be. I'm always open to learn new langauges.</p>

            <p>Please feel free to check out my portfolio and contact me. My email,linkedin and resume are accessible via the upper right
            hand corner, It'll take you to a new tab. Thank you for visiting. Sincerly, Joe Farrish</p>

          </div>
        </Container>
      </Jumbotron>
    </section>

  );
}

export default Home;
