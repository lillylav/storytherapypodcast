// import libraries
import React from 'react';
import { BrowserRouter as Router, Route, Switch}
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
import Recs from './components/Recs';

// page's JSX
function App() {
  return (
    <Router>
      <body className="lavendar-background">
        <Nav />
        <Banner />

          <main className="container lavendar-background">
            <Switch>
              <Route exact path="/">
                <Listen />
                <About />
              </Route>
              <Route path="/recs">
                <Recs />
              </Route>
            </Switch>
            <Engage />
          </main>
          <footer className="lavendar-background">
            <br />
          </footer>
      </body>
    </Router>
  );
}

export default App;
