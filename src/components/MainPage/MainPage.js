import classes from "./Style.css";
import React from "react";
import { Link } from 'react-router-dom';

import vet from "./icons/vet.png";
import donation from "./icons/donation.png";
import plus from "./icons/plus.png";
import user1 from "./icons/user1.jpg";
import petfood from "./icons/pet-food.png";
import petcare from "./icons/pet-care.png";
import pictvet from "./pictures/vet.png";
import picthome from "./pictures/home.png";
import pictpetfood24 from "./pictures/pet-food24.png";
import pictalvan from "./pictures/alvan-nee-73flblFUksY-unsplash.png";
import pictscreen from "./pictures/screenshot.png";

import Navigation from "./Cards/Navigation/Navigation";
import Footer from "./Cards/Footer/Footer";
import CommentSection from "../MainPage/Cards/Comment/CommentSection";
import AdoptCard from "../MainPage/Cards/Modules/Adopt/AdoptCard";
import DonateCard from "../MainPage/Cards/Modules/DonateCard/DonateCard";
import ReportCard from "../MainPage/Cards/Modules/ReportCard/ReportCard";
import VolunteerCard from "../MainPage/Cards/Modules/VolunteerCard/VolunteerCard";

const MainPage = () => {

    return (
        <div style={{bottom: "0", margin: "0",}}>
            {/* Required meta tags */}
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* Bootstrap CSS */}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                  rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                  crossorigin="anonymous"
            />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                    crossOrigin="anonymous"/>
            <link rel="stylesheet" href="./Style.css"/>
                <title>Stray Saver</title>

            <div style={{bottom: "0", margin: "0",}}>

                {/*Navigation starts*/}
                <Navigation/>

                {/*Main starts*/}
                <div className="container-fluid p-4 p-md-5 mb-1 mt-4 text-body-emphasis" style={{
                    color: 'white',
                    backgroundImage: 'linear-gradient(rgb(112, 158, 13,1), rgb(59, 82, 5))',
                    marginBottom: '1px',
                }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1 className="display-3 fw-bold">Animals are Part of Our Family</h1>
                                <p className="lead my-3">Multiple lines of text that form the lede, informing new
                                    readers quickly and
                                    efficiently about what’s most interesting in this post’s contents.</p>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-end align-items-end">
                                <img
                                    className="img-fluid"
                                    src={pictscreen}
                                    alt="dog and cat photo"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" text-end mt-5">
                    <div className="" style={{position: 'absolute', left: '-12%', bottom: '-210px'}}/>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <img
                                    src={pictalvan}
                                    className="img-fluid"
                                    style={{ width: '100%', height: '100%' }}
                                    alt="Dogs are running"
                                />
                            </div>
                            <div className="col-lg-4 px-0 d-flex align-items-center">
                                <div className="px-4">
                                    <h4 className="display-5 fw-bold">Animals are Part of Our Family</h4>
                                    <p className="lead my-3">
                                        Multiple lines of text that form the lede, informing new readers quickly and
                                        efficiently about
                                        what’s most interesting in this post’s contents.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/*Starting moddules*/}
                    <div className="px-4 pt-5 my-5 text-center ">
                        <h1 className="display-4 fw-bold mb-3">Stray animal deserves <br/> to be hosted!</h1>
                        <div className="col-lg-6 mx-auto mt-5">
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                                <img class="mx-2" src={picthome} width="40px" height="40px" alt=""/><h4
                                class="mt-1">Have home</h4>
                                <img class="mx-2" src={pictpetfood24} width="40px" height="40px"
                                     alt=""/>
                                <h4 class="mt-1">Eat Food</h4>
                                <img class="mx-2" src={pictvet} width="40px" height="40px" alt=""/><h4
                                class="mt-1">Take care</h4>
                            </div>
                        </div>
                    </div>

                    {/*Modules*/}
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div className="row row-cols-2 row-cols-md-2 mb-3 w-50 p-3 ">
                            <div className="col">
                                <AdoptCard/>
                            </div>
                            <div className="col">
                                <DonateCard/>
                            </div>
                            <div className="col">
                                <ReportCard/>
                            </div>
                            <div className="col">
                                <VolunteerCard/>
                            </div>

                            {/*From this part comment section starts*/}

                        </div>

                    </div>
                    <CommentSection/>
                </div>

            </div>
            {/*footer*/}
            <Footer />
        </div>
    )
};
export default MainPage;