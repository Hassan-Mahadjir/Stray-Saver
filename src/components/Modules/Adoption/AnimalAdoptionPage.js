import React from 'react';

import Adoption from "./Adoption";
import { animals } from '../../../App';

const AnimalAdoptionPage = () => {

    return (
        <div>
            {/* Other components or content */}
            <Adoption animals={animals} />
            {/* Other components or content */}
        </div>
    );
};

export default AnimalAdoptionPage;
