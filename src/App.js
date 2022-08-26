// import libraries
import React from 'react';
import 'bulma/css/bulma.min.css';

//import files
import './App.css';

// import components
import Nav from './components/Nav';
import About from './components/About';

import Footer from './components/Footer';

// page's JSX
function App() {
  return (
    <body className="lavendar-background">
      <Nav />
      <main className="container lavendar-background">
        <About />
        {/* <Portfolio />
        <Resume />
        <Contact /> */}
        <Footer />
      </main>
    </body>
  );
}

export default App;
