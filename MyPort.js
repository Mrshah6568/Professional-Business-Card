// import React from "react";
import React, { useEffect } from "react";
import Typed from "typed.js";
import Img from "./ms1.jpg";
// import './App.css';
import './MyPort.css';


function MyPort() {

    useEffect(() => {
        const typed = new Typed('#element', {
            strings: [
                'I am  Web devloper',
                'Skilfull Person',
                'Frontend Devloper',
                'Backend Devloper',
            ],
            typeSpeed: 10,
            cursorChar: ""
        });
    }, []);

    return (

        //// main div starting here
        <div className="Container">
            <nav className="navbar navbar-expand-lg mt-2  bg-dark" style={{ height: 80 }}>

                <div className="container-fluid">
                    <a className="navbar-brand" href="#">MS </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item text-center-nav ">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item text-center-nav">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item text-center-nav">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item text-center-nav">
                                <a className="nav-link" href="#">Journal</a>
                            </li>
                            <li className="nav-item text-center-nav">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>


            {/* two parts Summary  */}
            <div className="row md-12">
                <div className="col-md-6 ">
                    {/* info */}
                    <div className="a">  Welcome to My PortFolio </div>
                    <div className="b"> My Skill Is Below</div>
                    <span id="element"></span>
                </div>

                {/* for img  */}
                <div className="col-md-6">
                    <img src={Img} className="img-circle" />
                </div>
            </div>

        {/* new section for About me  */}
        <div className= "resume">
            <a href="./resume.html">Resume</a>
        </div>

          
        </div> //// main div


    )

}


export default MyPort;