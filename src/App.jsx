import { useState } from 'react';
import Header from './assets/components/header';
import Showcase from './assets/components/showcase';
import AboutUs from './assets/components/about-us';
import Schedule from './assets/components/schedule';
import Contacts from './assets/components/contacts';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
    <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
    <div className="app-container">
      {currentPage === 'home' && <Showcase />}
      {currentPage === 'about' && <AboutUs />}
      {currentPage === 'schedule' && <Schedule />}
      {currentPage === 'contacts' && <Contacts />}
    </div>
    </>
  );
}

export default App;