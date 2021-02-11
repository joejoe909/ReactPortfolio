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
            <h1>About Joe Farrish</h1>

            <img className="floatImgLeft" src={jfarrish} alt="Joe Farrish" />

            <p> <b>Full Stack Web Developer and C++ Developer.</b> I have a Passion for coding, I'm open to learn your technologies/stack and your way of building. </p>
            <p> <strong> Technologies: </strong></p>
            <p> <u> Javascript </u> - MERN, HTML, CSS, MySQL and MongoDb. </p>
            
            <p> <u>C++,Qt</u> - QtCore, Widgets and QML. </p>

            <p> In 2014 I taught myself C++ by reading books such as Ivor Horton's Visual C++ 2013. The first half of this book is an excellent way to learn C++ 11. </p> 

            <p> I've also taught myself Qt (Qt Widgets, Qt Core, QML) via Udemy and several books on Packtpub.com. Where I'm constantly keeping up on coding, 
            computer science, web development and data structures. </p>

            <p> In 2020 I attended a Javascript Web Development Boot Camp at the University of Arizona. I was able to learn HTML, CSS,Javascript, jQuery, Node.js,
           Express server, MySql, Handlebars.js, Sequelize, Mongo Db, and React. In addition we were exposed to Git, Github, Heroku, Netlify, and MongoDb Atlas. </p>

            <p> <strong> Projects in C++: </strong></p>
 
            <p> <u>Visual Brainstorm </u></p>

            <p> I made Visual Brainstorm in C++ and Qt. I utilized valuable skills such as Object Oriented Design, implemented C++ pointers, took advantage of the QT
            Framework and managed memory where needed... Qt does a lot of this for you... The other great feat contained within Visual Brainstorm is that I designed a
            custom tree data structure and I was able to implement serialization. For the GUI I was able to utilize the Qt Widgets classes and Qt Creator. </p>

            <p>With that I was able to create an LLC called Farrishworks where Visual Brainstorm can be purchased. If you would like a copy please contact me for
            the free full version. </p>

            <p> <strong> Projects in Javascript: </strong></p>
             
            <p> <u>Ez Geo Explorer </u></p> 
            <p> In bootcamp out group made a Website that utilizes the Open weather API, The NASA API and HERE maps API to create a web page that can display a 
            satelite image along side an interactive map. This was all done using HTML, Javascript, jQuery and CSS. </p>

            <p> <u>Magic The Gabbering </u></p> 
            <p>A second project we worked on was a Social Media Mockup Concept of Magic The Gathering. This was a web site that lets users look up cards and 
            once they're returned from the Magic The Gathering API they can make a post with the card and present it to other people on the forum. This was 
            all done using Node.js, HTML, Handlebars, Sequelize</p>

            <p> <u>Lesson Planner </u></p> 
            <p>A Third project where I was introduced to a very different method of working on a project. where the group codes as a single unit (sort of like
            pair programming...), we made a MERN Stack program (MongoDb, Express Server, React, Node.js) that would let teachers manage their lesson planner 
            from a website. This had full logon capabilities, CRUD operability, and would meet the criteria of a Fullstack Application. </p>

            <p>Please feel free to check out my portfolio and the pretaining GitHub repos. I hope to hear from you. </p>
            <p> Sincerely, </p>
            <p className='tab'> Joe Farrish</p>

          </div>
        </Container>
      </Jumbotron>
    </section>

  );
}

export default Home;
