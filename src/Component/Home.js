import React from 'react'
import "../App.css"
import profile from '../images/profile.png'
export default function Home() {
    return (
    <div className="pt-4 pt-5 container  mt-3">
            <div className=" mb-4 d-lg-flex justufy-content-center align-items-center flex-lg-row-reverse">
               
                <div className="col-lg-6 p-lg-5 pt-lg-5">
                    <b className="brand text-light">~ Software Developer</b>
                    <h4 className="text-capitalize text-light" ><b>Lawrence Maina</b></h4>
                    <h6 className="body-title text-light">Being perssionate with computer programing,i love solving prombles & improving Efficience to Make earth a better Home for Human kind with my skills .</h6>
                </div>
                 <div className="float-left col-lg-4 mb-4  mb-4">
                    <img src={profile} alt="Lawrence M " className="h-img img-fluid  rounded-lg border-thick border-white"/>
                </div>
            </div>   
    </div>
    )
}
