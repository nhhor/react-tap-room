import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import AboutUs from './AboutUs';

import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Header/>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/aboutus' component={AboutUs} />
      </Switch>

      <div className="footer">

        <Footer/>
      </div>

      <style jsx>{`
      .App {
        color: green;
      }

      .footer{
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      background-color: red;
      color: white;
      text-align: center;
    }
      `}</style>

    </div>
  );
}

export default App;
