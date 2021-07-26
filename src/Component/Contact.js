import React from 'react'
import "../App.css"
import "../style.css"
import emailjs from 'emailjs-com';
import linkin from '../images/linkin.png'
import github from '../images/github.png'
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
                    <h2 class="section-title text-light text-capitalize">Contact Information</h2>
                </div>
    
                <div  className=" col-12 justify-content-center d-inline-flex ">
                    <a  className="ti-facebook">fb</a> 
                    <a  className=" nav-link"><img className="col-12 col-lg-6 icon" src={github}/></a>  
                    <a className=" nav-link">Instagram</a> 
                    <a className=" nav-link">Twitter</a> 
                </div>
                <div className="col-lg-8 mx-auto">
                    <div className="bg-white rounded text-center p-5 shadow-down">
                    <h4 className="mb-80">Contact Form</h4>
                    <form onSubmit={sendEmail} className="row">
                        <div className="col-md-6">
                        <input type="text" id="name" name="name" placeholder="Full Name" class="form-control px-0 mb-4"/>
                        </div>
                        <div claclassNamess="col-md-6">
                        <input type="email" id="email" name="email" placeholder="Email Address" class="form-control px-0 mb-4"/>
                        </div>
                        <div className="col-12">
                        <textarea name="message" id="message" className="form-control px-0 mb-4"
                            placeholder="Type Message Here"></textarea>
                        </div>/
                        <div className="col-lg-6 col-10 mx-auto">
                        <button className="btn btn-primary w-100">send</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            
            <div className=" container m-5 pb-lg-5 col-lg-12 mt-4">
               <div className="row">
                    <div className="col-md-4">
                        <h5 className="text-light">Email</h5>
                        <p className="text-white paragraph-lg font-secondary">mainalawrence32@gmail.com</p>
                    </div>
                    <div className="col-md-4">
                        <h5 className="text-light">Phone</h5>
                        <p className="text-white paragraph-lg font-secondary">+254 740 938 029</p>
                    </div>
                    
                    </div>
            </div>
    </div>
    )
    
}
