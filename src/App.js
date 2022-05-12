import NavbarFunc from './Components/Navbar';
import ContainerFunc from './Components/Container';
import Video from './Components/Video';
import Process from './Components/Process';
import Footer from './Components/Footer';
import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <NavbarFunc/>
      <ContainerFunc/>
      <Video/>
      <Process/>
      <Footer/>
    </div>
  );
}

export default App;
