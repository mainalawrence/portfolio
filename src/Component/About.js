import React from 'react'
import 'react-circular-progressbar/dist/styles.css';
import "../App.css"
import "../style.css"



export default function About() {
    return (
        <section className="section text-light" id="about" data-aos="fade-up">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6  px-lg-4 ml-lg-4 ">
                        <div className="col-lg-4">
                            <h2 className="text-light"><i className="text-light header-title"></i>Myself</h2>
                        </div>
                    <div className="row ">
                        
                        <div className="col-lg-8 ">
                            <p className="text-white-60 text-white body-title">Hello! I’m <span className="text-md">Lawrence Maina</span> a software , web and Mobile Developer <span className="text-white">Designer & Developer</span> with over <span className="text-white">three years</span> work experience.</p>
                            <p className="text-white-70 text-white body-title">Love the Web and the work we do.I work closely with my clients to deliver the best <span className="text-white">possible solutions</span> for their needs</p>
                        </div>
    
                    </div>
                </div>
               
                
                <div className="col-lg-6 mt-5 mt-lg-0 mt-md-0 col-md-6">
                <div className="col-lg-3">
                            <h2 className="text-light"><i className="ti-minus text-white-70 text-white header-title"></i>Skills</h2>
                        </div>
                    <div className="row">
                        
                        <div className="col-lg-9 pl-5">
                            <p className="text-white-70 text-white body-title">
                               I develop my work with the following tools.
                            </p>
    
                            <ul className="list-unstyled lh-45 body-title">
                                <li> <i className="ti-check mr-3 text-color"></i><span className="text-white-70 body-title">Web Designing</span> - HTML/CSS</li>
                                <li><i className="ti-check mr-3 text-color"></i><span className="text-white-70 body-title text-light">Graphic Design</span> - UI/UX</li>
                                <li><i className="ti-check mr-3 text-color"></i><span className="text-white-70 body-title">Web Development</span> -JAVASCRIPT</li>
                                <li><i className="ti-check mr-3 text-color"></i><span className="text-white-70 body-title">Application Dev</span> - JAVASCRIPT/c++</li>
                                <li><i className="ti-check mr-3 text-color"></i><span className="text-white-70 body-title">GAME Dev</span> - JAVASCRIPT/c++</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    
            
        </div>
    </section>
            )
            }
