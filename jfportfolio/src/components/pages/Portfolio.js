import React from "react";
import VBS from "../img/VBS.png";
import QzTmp from "../img/QzTmp.png";
import PT from "../img/portfolioTemplate.png";
import EGT from "../img/EGT.jpg";
import wdb from "../img/wdb.jpg";
import pwa from "../img/pwa.png";
import "./styles/home_style.css";


function About() {
  return (
    <section className="" alt="this contains and pushes the main content in/out when you resize">
      <section class="jumbotron text-left myAdj" alt="This tag contains the main content" id="addDarkGrey">
        <div class="container border rounded border border-dark bg-white" alt="Main Container that holds the grid">
          <div class="container mt-4">
            <h1 class="ml-4 mt-3"> The Portfolio of Joe Farrish</h1>
          </div>

          <section alt="A responsive image grid by Joe Farrish">
            
            <div class="row"> 
              <div class="col-md-4">
                <a href="https://farrishworks.com" target="_blank"> <img src={VBS} class="img-fluid p-4 m-2" alt="Checkout Visual Brainstorm by Farrish Works LLC. Software to help creatives build brainstorm trees capable of holding large amounts of information."/> </a>
                  <h6>Visual Brainstorm.</h6>
                  <p>Visual Brainstorm is a program I made in C++ using the Qt Framework. I don't expect to use C++ much as a Web Developer
                  but I'm proud of this and I want to communicate that I've been studying programming for some time now. Visual Brainstorm
                  is a good project that displays my understanding of Object Oriented programming and my will to build.</p> 
              </div>

              <div class="col-md-4">
                <a href="https://joejoe909.github.io/TimedQuiz/" target="_blank"> <img src={QzTmp}
                  class="img-fluid p-4 m-2" alt="With the world going remote, it's never been a better time to get into building a system that allows potential customers to quickly construt tests for students, job seekers, etc. This Template provides a colorful starting point and the necessary logic tobegin that venture!"/></a>
                  <h6>Quiz Template.</h6><p>I'm always amazed at how colorful Web Development is. This quiz template provides the groundwork for construction of a testing system.</p> 
              </div>  

              <div class="col-md-4">
                <a href="https://joejoe909.github.io/ResponsivePortfolio/index.html" target="_blank"> <img src={PT} class="img-fluid p-4 m-2" alt="Responsive image"/> </a>
                  <h6>Portfolio Template.</h6>
                  <p>This is another template project which consists of HTML,CSS and utilizes the Bootstrap CSS library. As a developer I like making reusable components which is why I like making templates.</p>
              </div>

              <div class="col-md-4">
                <a href="https://joejoe909.github.io/Ez-Geo-Tracker/" target="_blank"> <img src={EGT} class="img-fluid p-4 m-2" alt="Responsive image"/> </a>
                  <h6>Ez Geo-Tracker.</h6>
                  <p>This is a colaboration project I did with 3 other individuals. My role was to implement the HERE and NASA Earth API to provide interactive maps to the page.This was done via the HERE Javascript library. I'm quite proud of they way we all came togeather in this project. </p>
              </div>

              <div class="col-md-4"> 
                <a href="https://joejoe909.github.io/Weather-Dashboard/" target="_blank"> <img src={wdb} class="img-fluid p-4 m-2" alt="Responsive image"/> </a>
                  <h6>Weather Dashboard.</h6>
                  <p>This is a project that implements the Open Weather API. A lot of fun stuff going on with HTML,Javascript, JQuery and Bootstrap.</p>
              </div>

              <div class="col-md-4">
                <a href="https://github.com/joejoe909/PWA-Online-Offline-Budget-Trackers" target="_blank"> <img src={pwa} class="img-fluid p-4 m-2" alt="Responsive image" /> </a>
                <h6>Budget Tracker</h6>
                <p>This is a simple Progressive Web App that can be installed on your phone or PC. Once installed, it acts more like an application than a web page.</p>
              </div>



            
            
            </div>
          </section>  
        </div>
      </section>
    </section>

  );
}

export default About;
