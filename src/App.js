import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from "./components/MainPage/MainPage";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<MainPage />} />
              {/*<Route path="/chooseaccount" element={<LoginPage />} />*/}
              {/*<Route path="/mainpage" element={<LoginPage />} />*/}
          </Routes>
      </BrowserRouter>
  );
}

export default App;
