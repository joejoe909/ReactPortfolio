import React from "react";
import "./styles/home_style.css";
import PrjCard from "./PrjCard"
import prj from "../JFProjects.json"
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


function Portfolio() {

  const Projects = prj.map((project) => (<PrjCard {...project} key = {project.id} />))


  return (
    <section className="" alt="this contains and pushes the main content in/out when you resize">
      <Jumbotron className="jumbotron text-left myAdj"  alt="This tag contains the main content" id="addDarkGrey">
        <Container className="container border rounded border border-dark bg-white" alt="Main Container that holds the grid" style={{ padding: 36 }}>
          <Container className="container mt-4">
            <h1 className="ml-4 mt-3"> The Portfolio of Joe Farrish</h1>
          </Container>

          <section alt="A responsive image grid by Joe Farrish">
            
            <div className="row"> 
                {Projects}
            </div>
          </section>  
        </Container>
      </Jumbotron>
    </section>

  );
}

export default Portfolio;
