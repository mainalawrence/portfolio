import React from 'react'
import "../App.css"
import "../style.css"
import github from '../images/github.ico';
import twitter from '../images/twitter.ico';
import facebook from '../images/facebook.ico';
import linkedin from '../images/linkedin.ico';
import instagram from '../images/instagram.ico';
import emailjs from 'emailjs-com';
export default function Contact() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_qfyjaob', 'template_351zuw7', e.target, 'user_WG0JdYLYsj53tfBppOyAJ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (
            <div className="container rounded-lg mt-4 pt-4 pt-5 ">
                <div className="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-title header-title text-light text-capitalize">Contact Information</h2>
                </div>
                <div className="text-capitalize d-inline-flex justify-content-center align-items-center text-light my-2 ">
                        <div>
                           <a  target="_blank" href="https://github.com/mainalawrence"><img src={github} alt="github"/></a>
                        </div>   
                        <div>
                            <a  target="_blank" href="https://www.linkedin.com/in/lawrence-maina-295295202/"><img src={linkedin} alt="linkedin"/></a>
                        </div>     
                       <div>
                            <a  target="_blank" href="https://twitter.com/Lawrenc98672279"><img src={twitter} alt="twitter"/></a>
                        </div>
                        <div>
                            <a  target="_blank" href="https://www.facebook.com/lawrence.maina.58958/"><img src={facebook} alt="facebook"/></a>
                        </div>
                       
                        <div>
                            <a  target="_blank" href="https://www.instagram.com/mainalawrence32/"><img src={instagram} alt="instagram1"/></a>
                        </div>
                </div>
   
                <div className="col-lg-6 mx-auto">
                    <div className="bg-white rounded text-center p-5 ">
                    <h4 className="mb-80">Contact Form</h4>
                    <form onSubmit={sendEmail} className="row">
                        <div className="col-md-6 text-dark">
                        <input type="text" id="name" name="name" placeholder="Full Name" class="form-control px-0 mb-4"/>
                        </div>
                        <div claclassNamess="col-md-6">
                        <input type="email" id="email" name="email" placeholder="Email Address" class="form-control px-0 mb-4"/>
                        </div>
                        <div className="col-12">
                        <textarea name="message" id="message" className="form-control px-0 mb-4"
                            placeholder="Type Message Here"></textarea>
                        </div>
                        <div className="col-lg-6 col-10 mx-auto">
                        <button className="btn btn-dark  w-100">send</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            
            <div className=" container my-3 ">
               <div className="row d-flex justify-content-center">
                    <div className="col-md-5  mr-3 align-items-end">
                        <p className="text-light">Email</p>
                        <p className="text-white">mainalawrence32@gmail.com</p>
                    </div>
                    <div className="col-md-5">
                        <p className="text-light">Phone</p>
                        <p className="text-white  ">+254 740 938 029</p>
                    </div>
                    
                    
                    </div>
            </div>
    </div>
    )
    
}
