import React from 'react'
import "../App.css"
export default function Service() {
    return (
            <div class="container py-4">
                <div class="row">
                    <div class="col-12 text-center">
                        <h2 class="section-title text-light text-light text-capitalize header-title ">Services</h2>
                    </div>
                    <div class="col-md-4 mb-4 mb-md-0">
                        <div class="card hover-shadow shadow">
                            <div class="webdev text-center px-4 py-5">
                                <i class="ti-palette icon mb-5 d-inline-block"></i>
                                <h2 class="mb-4 text-danger service-title"><b>Graphical Design</b></h2>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4 mb-md-0">
                        <div class="card hover-shadow shadow">
                            <div class="games text-center px-4 py-5">
                                <i class="ti-palette icon mb-5 d-inline-block"></i>
                                <h2 class="mb-4 text-danger service-title">Game Development</h2>
                                <p className="lead">

                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4 mb-md-0">
                        <div class="card hover-shadow shadow">
                            <div class=" webdev text-center px-4 py-5">
                                <i class="ti-panel icon mb-5 d-inline-block"></i>
                                <h6 class="mb-4 text-danger service-title ">Web Development</h6>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4 mb-md-0 mt-3 ">
                        <div class="card hover-shadow shadow">
                            <div class=" database p-5 text-center px-4 py-5">
                                <h4 class="mb-4 text-danger service-title">Database  Design</h4>
                                <p className="p-2"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4 mb-md-0 mt-3">
                        <div class="card hover-shadow shadow">
                            <div class=" mobile text-center px-4 py-5">
                                <h4 class="mb-4 text-danger service-title">Mobile Development</h4>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
