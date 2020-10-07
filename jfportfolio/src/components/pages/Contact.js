import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";
import "./styles/home_style.css";

function Contact(props) {
  return (
    <div>
      <section className="" alt="this contains and pushes the main content in/our when you resize">

        <section className="jumbotron text-left myAdj" id="addDarkGrey">

          <div className="container border rounded border border-dark bg-white"
            alt="Main Container that holds the contact form">
             <div className="container mt-2">
              <div className="row">
                <h1 className="ml-0 mt-4">Resume.</h1>
              </div>

              <div className="div">
                <hr/>
              </div>

              </div>
              <div className="col-dm-12 mb-4">
                <section alt="Download Joe Farrish's Resume.">
                  <h4>You can download my resume in pdf format <a href="https://drive.google.com/file/d/1GKverFkQ2kJCvslThb2zZZ9K2_0wmKl7/view?usp=sharing">here</a></h4>
                </section>
              </div>
            </div>
       
          
        </section>
      </section>
      
    </div>
  );
}

export default Contact;
