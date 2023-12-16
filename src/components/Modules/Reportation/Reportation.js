// Report.js
import React, { useState } from 'react';

const Reportation = () => {
    const [reportData, setReportData] = useState({
        location: '',
        image: null,
        comment: '',
    });

    const handleChange = (e) => {
        setReportData({ ...reportData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        // Handle image upload logic here
        const selectedImage = e.target.files[0];
        setReportData({ ...reportData, image: selectedImage });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement report logic (upload image, write comment, send report)
        // You may need to use FormData to handle file uploads
        const formData = new FormData();
        formData.append('location', reportData.location);
        formData.append('image', reportData.image);
        formData.append('comment', reportData.comment);

        // Make an API call to submit the report data
        // Example using fetch:
        fetch('/api/report', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                // Handle success
                console.log('Report submitted successfully:', data);
            })
            .catch(error => {
                // Handle error
                console.error('Error submitting report:', error);
            });
    };

    return (
        <div>
            <h1>Report</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Location:
                    <input type="text" name="location" onChange={handleChange} />
                </label>
                <label>
                    Image:
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                </label>
                <label>
                    Comment:
                    <textarea name="comment" onChange={handleChange}></textarea>
                </label>
                <button type="submit">Submit Report</button>
            </form>
        </div>
    );
};

export default Reportation;
