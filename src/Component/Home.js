import React from 'react'
import "../App.css"
import profile from '../images/profile.png'
export default function Home() {
    return (
    <div className="pt-4 pt-5 container rounded-lg bg-success  mt-3">
            <div className="shadow-down mb-4 d-lg-flex flex-lg-row-reverse">
               
                <div className="col-lg-6 p-lg-5 pt-lg-5">
                    <b className="brand">~ Software Developer</b>
                    <h4 className="text-capitalize " >Lawrence Maina</h4>
                    <h6 className="lead ">Being perssionate with computer programing,i love solving prombles & improving Efficience to Make earth a better Home for Human kind with my skills .</h6>
                </div>
                 <div className="shadow-down col-lg-4 mb-4  shadow-down mb-4">
                    <img src={profile} className="h-img img-fluid  rounded-lg border-thick border-white"/>
                </div>
            </div>   
    </div>
    )
}
