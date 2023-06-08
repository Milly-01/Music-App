import React from "react";
import Navbar from "./Navbar";
import "./Home.css";

function Home(){
    return(
        <div>
            <Navbar/>
            <div className="home-container">
            <h1 className="heading-home">Welcome to ETM Music</h1>
            <div className="image-bg">
                <img className="my-image-bg" src="/musicimage.png"></img>
            </div>
            <h4 className="h4-question">What is Music?</h4> 
            <p className="music-def">an art of sound in time that expresses ideas and emotions in significant forms through the elements of rhythm, melody, harmony, and color.</p>
            <h6 className="futuristic">"Maybe music saved my life" - Futuristic (Rapper)</h6>
           
          

            </div>
            
        </div>
    );
}

export default Home;