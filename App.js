
import React from 'react';
import Header from './component/Header';
import About from './component/About';
import Courses from './component/Courses';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Image from './images/college_main.png'; // Adjust the path accordingly

import './App.css';  // Import only one CSS file

function App() {
  return (
    <div className="App">
      <Header />
      <Courses />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
