import React, { useState } from 'react';
import petcare from "../../../components/MainPage/icons/pet-care.png";
const VolunteeringForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        age: '',
        reason: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        console.log('Form data:', formData);
        console.log('Form data entries:', [...formData.entries()]);

        try {
            const response = await fetch('http://localhost:3000/submitVForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: formData.get('firstName'),
                    lastName: formData.get('lastName'),
                    email: formData.get('email'),
                    phoneNumber: formData.get('phoneNumber'),
                    address: formData.get('address'),
                    age: formData.get('age'),
                    reason: formData.get('reason'),
                }),
            });

            const result = await response.json();

            if (result.success) {
                console.log('Form submitted successfully');
                // Optionally, you can redirect the user to a thank you page or perform other actions
            } else {
                console.error('Form submission failed:', result.error);
                // Handle the error, display a message to the user, etc.
            }
        } catch (error) {
            console.error('Error submitting volunteering:', error);
        }
    };

    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                crossOrigin="anonymous"
            />
            <title>Volunteer Form</title>

            <nav className="navbar navbar-expand-lg fixed-top navbar-dark"
                 style={{ backgroundImage: "linear-gradient(rgb(112, 158, 13,1), rgb(99, 136, 14))" }}>
                <div className="container-fluid">
                    <a className="navbar-brand ms-3" href="/">
                        Stray Saver
                    </a>
                    <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mt-1 mx-2">
                                <a className="nav-link" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item mt-1 mx-2">
                                <a className="nav-link" href="#">
                                    Animals List
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

            <div className="py-5 text-center" style={{ marginTop: 50 }}>
                <img className="d-block mx-auto mb-4" src={petcare} alt="" width={95} height={95} />
                <h2>Volunteer Form</h2>
                <p className="lead" style={{ fontWeight: 350 }}>
                    Volunteer with organizations committed to caring for stray animals and make a meaningful difference in their lives
                </p>
            </div>

            <div className="container">
                <div className="row g-5">
                    <div className="col-md-7 col-lg-8 form-control custom-input">
                        <h4 className="mb-3">Volunteering Required Information</h4>
                        <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label" style={{ color: "#248B0D", fontWeight: 550 }}>
                                        First Name:
                                    </label>
                                    <input type="text" className="form-control" id="firstName" name="firstName"
                                           placeholder="" defaultValue="" required />
                                    <div className="invalid-feedback">Valid first name is required.</div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label" style={{ color: "#248B0D", fontWeight: 550 }}>
                                        Last Name:
                                    </label>
                                    <input type="text" className="form-control" id="lastName" name="lastName"
                                           placeholder="" defaultValue="" required />
                                    <div className="invalid-feedback">Valid last name is required.</div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="email" className="form-label" style={{ color: "#248B0D", fontWeight: 550 }}>
                                        Email:
                                    </label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="you@example.com" />
                                    <div className="invalid-feedback">Please enter a valid email address for adoption updates.</div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="phoneNumber" className="form-label" style={{ color: "#248B0D", fontWeight: 550 }}>
                                        Phone Number:
                                    </label>
                                    <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber"
                                           placeholder="+90 392 XXX XX XX" />
                                    <div className="invalid-feedback">Please enter a valid phone number.</div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label" style={{ color: "#248B0D", fontWeight: 550 }}>
                                        Address:
                                    </label>
                                    <input type="text" className="form-control" id="address" name="address"
                                           placeholder="1234 Main St" required />
                                </div>

                                <div className="col-12">
                                    <label htmlFor="age" className="form-label" style={{ color: "#248B0D", fontWeight: 550 }}>
                                        Age:
                                    </label>
                                    <input type="number" className="form-control" id="age" name="age" placeholder="Age must be >=18" />
                                    <div className="invalid-feedback">Please enter a valid age for volunteering.</div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="reason" className="form-label" style={{ color: "#248B0D", fontWeight: 550 }}>
                                        Reason for applying to volunteering:
                                    </label>
                                    <textarea className="form-control" id="reason" name="reason" placeholder="Reason" />
                                </div>
                            </div>

                            <hr className="my-4" />

                            <button className="w-100 btn btn-lg" style={{ backgroundColor: "#30931a", color: "white" }} type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VolunteeringForm;
