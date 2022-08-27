// import libraries
import React from 'react';
import 'bulma/css/bulma.min.css';

//import files
import './App.css';

// import components
import Nav from './components/Nav';
import About from './components/About';
import Engage from './components/Engage';
import Listen from './components/Listen';

// page's JSX
function App() {
  return (
    <body className="lavendar-background">
      <Nav />
      <main className="container lavendar-background">
        <About />
        <Listen />
        <Engage />
      </main>
    </body>
  );
}

export default App;
