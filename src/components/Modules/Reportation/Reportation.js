import React, { useState, useRef } from 'react';
import axios from 'axios';
import petfood from "../../../components/MainPage/icons/pet-food.png";
const Reportation = () => {

    const [animalLocation, setAnimalLocation] = useState('');
    const [animalStatus, setAnimalStatus] = useState('');
    const [images, setImages] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);


    const fileInputRef = useRef(null);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        console.log('Form data:', formData);
        console.log('Form data entries:', [...formData.entries()]);


        try {
            images.forEach((image, index) => {
                formData.append(`image${index + 1}`, image);
            });
            // formData.append('imageName', /* provide image name here */);
            // images.forEach((image, index) => {
            //     formData.append(`image${index + 1}`, image);
            // });
            // formData.append('animalLocation', animalLocation);
            // formData.append('animalStatus', animalStatus);


            const response = await axios.post('http://localhost:3000/submitRForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: JSON.stringify({
                    animalLocation: formData.get('animalLocation'),
                    animalStatus: formData.get('animalStatus'),
                    ...Object.fromEntries(formData)
                }),
            });

            const result = await response.json();

            if (result.success) {
                console.log('Form submitted successfully');

            } else {
                console.error('Form submission failed:', result.error);

            }
        } catch (err) {
            console.error('Error submitting report:', err);
        }
    };



    const handleFileChange = (e) => {
        const selectedImages = e.target.files;

        if (selectedImages) {

            const previews = Array.from(selectedImages).map((image) => URL.createObjectURL(image));
            setImagePreviews(previews);
            setImages(selectedImages);
        }
    };

    return (

        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                crossOrigin="anonymous"
            />
            {/* <link rel="stylesheet" href="style.css"> */}
            <title>Report Form</title>
            <nav
                className="navbar navbar-expand-lg fixed-top navbar-dark"
                style={{
                    backgroundImage: "linear-gradient(rgb(112, 158, 13,1), rgb(99, 136, 14))"
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
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="navbar-collapse navbar-collapse "
                        id="navbarsExampleDefault"
                    >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mt-1 mx-2" style={{ color: "white" }}>
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
                <img
                    className="d-block mx-auto mb-4"
                    src={petfood}
                    alt=""
                    width={95}
                    height={95}
                />
                <h2>Report Form</h2>
                <p className="lead" style={{ fontWeight: 350 }}>
                    Every small act of kindness towards a stray animal not only changes their
                    world but also reflects the compassion that makes our world a better place
                    for all beings.
                </p>
            </div>
            <div className="container ">
                <div className="row g-5">
                    <div className="col-md-7 col-lg-8 form-control custom-input">
                        <h4 className="mb-3">Reporting Animal Required Information</h4>
                        <form className="needs-validation" noValidate="" onSubmit={handleSubmit}>
                            <div className="row g-3 ">
                                <div className="col-12">
                                    <label
                                        htmlFor="location"
                                        className="form-label"
                                        style={{ color: "#248B0D", fontWeight: 550 }}
                                    >
                                        Location of Animal (in details):{" "}
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="location"
                                        name={"animalLocation"}
                                        placeholder="1234 Main St"
                                    />
                                </div>
                                <div className="col-12">
                                    <label
                                        htmlFor="photo"
                                        className="form-label "
                                        style={{color: "#248B0D", fontWeight: 550}}
                                    >
                                        Animal's Photo:
                                    </label>
                                    <input type="file" className="form-control" id="photo" name={"images" } accept="image/*"
                                            placeholder="file of type png or jpg"
                                           onChange={handleFileChange} ref={fileInputRef} multiple/>
                                    {imagePreviews.length > 0 && imagePreviews.map((preview, index) => (
                                                        <img key={index} src={preview} alt={`Preview ${index + 1}`}
                                                             style={{ maxWidth: '200px', maxHeight: '200px',
                                                                 marginRight: '10px' , paddingTop: '40px' }} />
                                                    ))}
                                </div>
                                <div className="col-md-5">
                                    <label
                                        htmlFor="financial status"
                                        className="form-label"
                                        style={{ color: "#248B0D", fontWeight: 550 }}
                                    >
                                        Needs:
                                    </label>
                                    <select className="form-select" id="animalStatus" name={"animalStatus"} required="">
                                        <option value="">Choose...</option>
                                        <option>Food</option>
                                        <option>Water</option>
                                        <option>Health Care</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a financial status.
                                    </div>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <button
                                className="w-100 btn  btn-lg"
                                style={{ backgroundColor: "#30931a", color: "white" }}
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Reportation;
