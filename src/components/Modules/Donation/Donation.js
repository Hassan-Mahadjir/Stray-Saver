import React from 'react';
import { Link } from 'react-router-dom';

const Donation = ({ organizations }) => {
    if (!organizations) {
        return null;
    }

    return (
        <div>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                crossOrigin="anonymous"
            />
            <h1>Stray Animal Helper Organizations</h1>
            {organizations.map(organization => (
                <div key={organization.OrgID}>
                    <img src={organization.Logo} alt={organization.OrgName}/>
                    <h3>{organization.OrgName}</h3>
                    {/* Make sure this Link component is within the context of a Route */}
                    <Link
                        to={{
                            pathname: `/organization/${organization.OrgID}`,
                            state: {organizationData: organization}
                        }}
                    >
                        Donate
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Donation;
