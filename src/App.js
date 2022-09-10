// import libraries
import React from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import 'bulma/css/bulma.min.css';

//import files
import './App.css';

// import components
import Nav from './components/Nav';
import Banner from './components/Banner';
import Listen from './components/Listen';
import About from './components/About';
import Engage from './components/Engage';

// page's JSX
function App() {
  return (
    <body className="lavendar-background">
      <Nav />
      <Banner />

        <main className="container lavendar-background">
          {/* <Route path="/" element={ } /> */}
          <Listen />
          <About />
          <Engage /> 
          
        </main>
        <footer className="lavendar-background">
          <br />
        </footer>
    </body>
  );
}

export default App;
