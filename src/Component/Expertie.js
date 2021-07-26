import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "../App.css"
import "../style.css"
export default function Expertie() {
    return (
        <div className="container  pb-lg-1 rounded-lg">
            
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-title header-title text-light text-capitalize">Expertise</h2>
                </div>
                <div class="col-lg-3 hover-shadow shadow col-sm-6 mb-4 mb-lg-0">
                    <div class=" card text-center">
                        <div class="position-relative rounded-top " data-color="#ffbcaa">
                            <div className="p-4" ><CircularProgressbar value={95} text={`${95}%`} />;</div>
                        </div>
                        <div class="card-footer bg-white">
                            <h5 class="card-title">Software Application</h5>
                            <h4>(95%)</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 hover-shadow shadow col-sm-6 mb-4 mb-lg-0">
                    <div class="card text-center">
                        <div class="position-relative rounded-top " data-color="#ffbcaa">
                            <div className="p-4" ><CircularProgressbar value={85} text={`${85}%`} />;</div>
                        </div>
                        <div class="card-footer bg-white">
                            <h4 class="card-title">Web Application</h4>
                            <h4>(85%)</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 hover-shadow shadow col-sm-6 mb-4 mb-lg-0">
                    <div class="card text-center">
                        <div class="position-relative rounded-top " data-color="#ffbcaa">
                            <div className="p-4" ><CircularProgressbar value={70} text={`${80}%`} />;</div>
                        </div>
                        <div class="card-footer bg-white">
                            <h4 class="card-title">Mobile App (80%)</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 hover-shadow shadow col-sm-6 mb-4 mb-lg-0">
                    <div class="card shadow text-center">
                        <div class="position-relative rounded-top " data-color="#bdecf6">
                            <div className="p-4" ><CircularProgressbar value={70} text={`${70}%`} />;</div>
                        </div>
                        <div class="card-footer bg-white">
                            <h4 class="card-title">Graphic Design</h4>
                            <h4>(70%)</h4>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 hover-shadow shadow col-sm-6 mb-4 mt-lg-4 mb-lg-0">
                    <div class="card text-center">
                        <div class="position-relative rounded-top " data-color="#bdecf6">
                            <div className="p-4" ><CircularProgressbar value={60} text={`${60}%`} />;</div>
                        </div>
                        <div class="card-footer bg-white">
                            <h4 class="card-title">Game Development</h4>
                            <h4>(60%)</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 hover-shadow shadow col-sm-6 mb-4 mt-lg-4 mb-lg-0">
                    <div class="card text-center">
                        <div class="position-relative rounded-top " data-color="#bdecf6">
                            <div className="p-4" ><CircularProgressbar value={90} text={`${90}%`} />;</div>
                        </div>
                        <div class="card-footer bg-white">
                            <h4 class="card-title">Database Design</h4>
                            <h4>(90%)</h4>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    )
}
