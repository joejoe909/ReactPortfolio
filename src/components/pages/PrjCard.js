import React from "react";


function PrjCard(props) {
    
    return (
        
        <div className="col-md-4">
            <a href={props.PrjLink} target="_blank" rel="noopener noreferrer" > <img src={props.ImgLink} className="img-fluid p-4 m-2" alt=""/> </a>
            <a href={props.GitHub} target="_blank" rel="">GitHub Repo</a>
            <h6>{props.prj}</h6>
            <p>{props.desc}</p>
        </div>
       
       );
    }
    
    export default PrjCard;




    // const unNum = Math.floor(Math.random() * 100);
    // const unNum2 = uuidv4();
    // console.log(unNum)
    // console.log(unNum2);