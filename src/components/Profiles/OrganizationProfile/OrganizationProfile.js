// OrganizationProfile.js
import React from 'react';

const OrganizationProfile = ({ location }) => {
    const organizationData = location?.state?.organizationData;

    // if (!organizationData) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div>
            <h2>{organizationData}</h2>
            <img src={organizationData.Logo} alt={organizationData} />
            <p>Email: {organizationData.Email}</p>
            <p>Contact Info: {organizationData.ContactInfo}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default OrganizationProfile;
