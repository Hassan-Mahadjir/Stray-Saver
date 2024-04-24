import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import Reportation from './components/Modules/Reportation/Reportation';
import Login from './components/Log/Login/Login';
import Volunteering from './components/Modules/Volunteering/Volunteering';
import Adoption from './components/Modules/Adoption/AnimalAdoptionPage';
import Donation from './components/Modules/Donation/Donation';
import AnimalProfile from './components/Profiles/AnimalProfile/AnimalProfile';
import AnimalAdoptPage from './components/Modules/Adoption/AnimalAdoptionPage';
import OrganizationProfile from './components/Profiles/OrganizationProfile/OrganizationProfile';
import DonationPage from './components/Modules/Donation/DonationPage';

import AdoptForm from './components/Modules/Adoption/AdoptForm';
import photo1 from "./animalData/cat1.jpg";
import photo2 from "./animalData/dog2.jpg";
import photo3 from "./animalData/dog1.jpg";

export const animals = [
    {
        id: 1,
        name: 'Buddy',
        breed: 'Labrador',
        photo: photo1,
    },
    {
        id: 2,
        name: 'Whiskers',
        breed: 'Siamese',
        photo: photo2,
    },
    {
        id: 3,
        name: 'Charlie',
        breed: 'Golden Retriever',
        photo: photo3,
    },
    {
        id: 4,
        name: 'Mittens',
        breed: 'Persian',
        photo: photo1,
    },
    {
        id: 5,
        name: 'Rocky',
        breed: 'Boxer',
        photo: photo2,
    },
    {
        id: 6,
        name: 'Luna',
        breed: 'Husky',
        photo: photo3,
    },
    {
        id: 7,
        name: 'Oreo',
        breed: 'Dalmatian',
        photo: photo1,
    },
    {
        id: 8,
        name: 'Simba',
        breed: 'Bengal',
        photo: photo2,
    },
    {
        id: 9,
        name: 'Max',
        breed: 'German Shepherd',
        photo: photo3,
    },
];

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route exact path="/" element={<MainPage />} />
                <Route path="/reportation" element={<Reportation />} />
                <Route path="/login" element={<Login />} />
                <Route path="/volunteering" element={<Volunteering />} />
                <Route path="/adoption" element={<Adoption />} />
                <Route path="/animal-adopt" element={<AnimalAdoptPage />} />
                <Route path="/animalprofile/:id" element={<AnimalProfile />} />
                <Route path="/donation" element={<DonationPage />} />
                <Route path="/organization/:id" element={<OrganizationProfile />} />
                <Route path="/adoptform/:id" element={<AdoptForm />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;