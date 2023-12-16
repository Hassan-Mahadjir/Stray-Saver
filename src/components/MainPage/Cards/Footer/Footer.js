import React from "react";

const Footer = () => {
    return (
        <footer className="py-3 my-4"
                style={{
                    backgroundImage: 'linear-gradient(rgb(118, 165, 14), rgb(69, 94, 9))',
                    bottom: "0",
                    position: "bottom"
                }}>
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="#"
                                            className="nav-link px-2 text-white">Home</a>
                </li>
                <li className="nav-item"><a href="#"
                                            className="nav-link px-2 text-white">Modules</a>
                </li>
                <li className="nav-item"><a href="#"
                                            className="nav-link px-2 text-white">Comments</a>
                </li>
                <li className="nav-item"><a href="#"
                                            className="nav-link px-2 text-white">FAQs</a>
                </li>
                <li className="nav-item"><a href="#"
                                            className="nav-link px-2 text-white">About</a>
                </li>
            </ul>
            <p className="text-center text-white">© Stray Saver 2023</p>
        </footer>
    );
}

export default Footer;