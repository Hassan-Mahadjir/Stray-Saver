// AnimalProfile.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { animals } from '../../../App';
import foodimage from "./food.jpg";
import shelterimage from "./house.jpg";
import healthimage from "./healtcare.jpg";
import waterimage from "./water.jpg";


const AnimalProfile = ({ animal }) => {
    const { id } = useParams();

    const animalId = parseInt(id);

    if (typeof animalId !== 'number') throw new Error('String is not numeric');

    const animalData = animals.find((animal) => animal.id === animalId);

    if (!animalData) throw new Error('No animal data found');

    console.log('Aniaml', animalData, animalId);
    return (
        <>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                    crossOrigin="anonymous"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css"
                />
                <link rel="stylesheet" href="style.css" />
                <title>Stray Saver</title>
            </head>
            <body>
            <nav
                className="navbar navbar-expand-lg fixed-top navbar-dark"
                style={{
                    backgroundImage:
                        'linear-gradient(rgb(112, 158, 13,1), rgb(99, 136, 14))',
                }}
                aria-label="Main navigation"
            >
                <div className="container-fluid">
                    <a className="navbar-brand ms-3" href={'/'}>
                        Stray Saver
                    </a>
                    <button
                        className="navbar-toggler p-0 border-0"
                        type="button"
                        id="navbarSideCollapse"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="navbar-collapse navbar-collapse "
                        id="navbarsExampleDefault"
                    >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <a className="nav-link" href="#">
                                    <button
                                        className="btn btn-light btn-sm rounded-pill px-3 w-15"
                                        type="button"
                                    >
                                        Home
                                    </button>
                                </a>
                            </li>
                            <li className="nav-item mt-1 mx-2" style={{ color: 'white' }}>
                                <a className="nav-link" href="#">
                                    Animal List
                                </a>
                            </li>
                            <li className="nav-item mt-1 mx-2">
                                <a className="nav-link" href="#">
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item mt-1 mx-2">
                                <a className="nav-link" href="#">
                                    About
                                </a>
                            </li>
                            <li className="nav-item mt-1 mx-2">
                                <a className="nav-link" href="#">
                                    Login
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <button
                                        className="btn btn-outline-success rounded-pill px-3 w-20 btn-sm"
                                        style={{ color: 'white', borderColor: 'white' }}
                                        type="button"
                                    >
                                        Sign-in
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="col-lg-4" style={{ marginLeft: 800, marginTop: 100 }}>
                <svg
                    className="bd-placeholder-img rounded-circle"
                    width={200}
                    height={200}
                    role="img"
                    aria-label="Placeholder: 200x200"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                >
                    <title>Placeholder</title>
                    <defs>
                        {/* Define a clipPath to create a circular clipping area */}
                        <clipPath id="circleClip">
                            <circle cx={100} cy={100} r={100} />
                        </clipPath>
                    </defs>
                    {/* Use the clipPath for the image to be clipped into a circular shape */}
                    <g clipPath="url(#circleClip)">
                        <circle
                            cx={100}
                            cy={100}
                            r={100}
                            stroke="#ffff"
                            strokeWidth={5}
                            fill="none"
                        />{' '}
                        {/* Set stroke to black color */}
                        <image
                            xlinkHref={animalData.photo}
                            width="100%"
                            height="100%"
                            clipPath="url(#circleClip)"
                        />
                    </g>
                </svg>
                <h4 style={{ marginLeft: 20, paddingBottom: 20, marginTop: 30 }}>
                    Animal ID: #{animalData.id}
                    <button className="btn btn-success" style={{marginLeft: "10px"}}>
                        <Link to={`/adoptform/${animalData.id}`} style={{textDecoration: 'none', color: 'white'}}>
                            Adopt
                        </Link>
                    </button>
                </h4>
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div className="row row-cols-2 row-cols-md-4 mb-3 w-50 p-3 ">
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm border-2">
                            <div className="card-body">

                                <div className="text-center" >
                                    <img
                                        className=" mb-4"
                                        src={foodimage}
                                        alt=""
                                        width={125}
                                        height={125}
                                    />
                                </div>
                                <h5 style={{ color: '#248B0D', textAlign: 'center' }}>
                                    Food
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm border-2">
                            <div className="card-body">
                                <div className="text-center">
                                    <img
                                        className=" mb-4"
                                        src={shelterimage}
                                        alt=""
                                        width={125}
                                        height={125}
                                    />
                                </div>
                                <h5 style={{ color: '#248B0D', textAlign: 'center' }}>
                                    Shelter
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm border-2">
                            <div className="card-body">
                                <div className="text-center">
                                    <img
                                        className=" mb-4"
                                        src={healthimage}
                                        alt=""
                                        width={125}
                                        height={125}
                                    />
                                </div>
                                <h5 style={{ color: '#248B0D', textAlign: 'center' }}>
                                    Health Care
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm border-2">
                            <div className="card-body">
                                <div className="text-center">
                                    <img
                                        className=" mb-4"
                                        src={waterimage}
                                        alt=""
                                        width={125}
                                        height={125}
                                    />
                                </div>
                                <h5 style={{ color: '#248B0D', textAlign: 'center' }}>
                                    Water
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Organization Name</th>
                        <th scope="col">Bank</th>
                        <th scope="col">IBAN</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>STARY SAVERS</td>
                        <td>IS BANK</td>
                        <td>TB0028268168930173780179</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>STARY SAVERS</td>
                        <td>KOOP BANK</td>
                        <td>TB0028268168930173780179</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>STARY SAVERS</td>
                        <td>ZERATAT BANK</td>
                        <td>TB0028268168930173780179</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <section style={{ backgroundColor: 'rgb(118, 165, 14)' }}>
                {/* footer */}
                <footer
                    className="py-3 my-4"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgb(118, 165, 14),rgb(69, 94, 9))',
                    }}
                >
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item">
                            <a href="#" className="nav-link px-2 text-white">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-2 text-white">
                                Modules
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-2 text-white">
                                Comments
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-2 text-white">
                                FAQs
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-2 text-white">
                                About
                            </a>
                        </li>
                    </ul>
                    <p className="text-center text-white">© Stray Saver 2023</p>
                </footer>
            </section>
            </body>
        </>
    );
};

export default AnimalProfile;