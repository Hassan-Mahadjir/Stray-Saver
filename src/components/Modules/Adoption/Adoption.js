import React from 'react';
import { Link, useParams } from 'react-router-dom';


const Adoption = ({ animals }) => {

    return (

        <>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                crossOrigin="anonymous"
            />
            <link rel="stylesheet" href="style.css"/>
            <title>List of Animal</title>
            <nav
                className="navbar navbar-expand-lg fixed-top navbar-dark"
                style={{
                    backgroundImage:
                        'linear-gradient(rgb(112, 158, 13,1), rgb(99, 136, 14))',
                }}
                aria-label="Main navigation"
            >
                <div className="container-fluid">
                    <a className="navbar-brand ms-3" href={"/"}>
                        Stray Saver
                    </a>
                    <button
                        className="navbar-toggler p-0 border-0"
                        type="button"
                        id="navbarSideCollapse"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div
                        className="navbar-collapse navbar-collapse "
                        id="navbarsExampleDefault"
                    >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mt-1 mx-2" style={{color: 'white'}}>
                                <a className="nav-link" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#">
                                    <button
                                        className="btn btn-light btn-sm rounded-pill px-3 w-15"
                                        type="button"
                                    >
                                        Animals List
                                    </button>
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
                        </ul>
                    </div>
                </div>
            </nav>
            {/* list of animals */}
            <h5
                className="display-4 fw-bold mb-1"
                style={{
                    marginTop: 100,
                    padding : 100,
                    textAlign: 'center',
                    fontSize: 40,
                    textDecoration: 'underline',
                    color: '#248B0D',
                }}
            >
                Animals List
            </h5>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {animals.map((animal) => (
                        <div key={animal.id} className="col">
                            <div className="card h-100">
                                <div className="col">
                                    <div className="card mb-4  shadow-sm border-2">
                                        <div className="card-body">
                                            <div className="card h-100">
                                                <img
                                                    src={animal.photo}
                                                    alt={animal.name}
                                                    style={{
                                                        width: '250px',
                                                        height: '150px',
                                                        paddingLeft: '100px',
                                                        objectFit: 'center',
                                                        borderRadius: "20px 20px 0 0",
                                                    }}
                                                />
                                            </div>
                                            <p
                                                className="w-100 btn btn-lg "
                                                style={{
                                                    color: '#248B0D',
                                                    borderColor: '#fff',
                                                    fontWeight: 600,
                                                }}
                                            >
                                                {' '}
                                                ID: {animal.id} <br/>
                                                Type: {animal.breed}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">

                                    <Link to={`/animalprofile/${animal.id}`}>
                                        <button className="btn btn-primary">Adopt</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <footer className="bg-light text-center text-lg-start">
                    <div className="text-center p-3" style={{ marginTop: "200px"}}>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Adoption;
