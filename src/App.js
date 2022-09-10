// import libraries
import React from 'react';
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
          <Listen />
          <About />
          <Engage />
        </main>
    </body>
  );
}

export default App;
