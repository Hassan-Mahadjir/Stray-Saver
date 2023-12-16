import React from "react";

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark"
             style={{backgroundImage: 'linear-gradient(rgb(112, 158, 13,1), rgb(99, 136, 14))'}}
             aria-label="Main navigation">
            <div className="container-fluid">
                <a className="navbar-brand ms-3" href="#">Stray Saver</a>
                <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse navbar-collapse " id="navbarsExampleDefault">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <a className="nav-link" href="#">
                                <button className="btn btn-light btn-sm rounded-pill px-3 w-15" type="button">Home
                                </button>
                            </a>
                        </li>
                        <li className="nav-item mt-1 mx-2" style={{color: 'white'}}>
                            <a className="nav-link" href="#">Animal List</a>
                        </li>
                        <li className="nav-item mt-1 mx-2">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item mt-1 mx-2">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item mt-1 mx-2">
                            <a className="nav-link" href="#">Login</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <button
                                    className="btn btn-outline-success rounded-pill px-3 w-20 btn-sm"
                                    style={{color: 'white', borderColor: 'white'}}
                                    type="button">Sign-in
                                </button>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;