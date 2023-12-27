import React from 'react';
import Donation from './Donation';

const DonationPage = () => {
    const organizations = [
        { OrgID: 1, OrgName: 'Rescue Shelter', Logo: 'rescue-shelter-logo.jpg', Email: 'rescue@example.com', ContactInfo: '123-456-7890' },
        { OrgID: 2, OrgName: 'Animal Aid', Logo: 'animal-aid-logo.jpg', Email: 'animalaid@example.com', ContactInfo: '987-654-3210' },
    ];

    return (
        <div>
            <h1>Donation Page</h1>
            <Donation organizations={organizations} />
        </div>
    );
};

export default DonationPage;
