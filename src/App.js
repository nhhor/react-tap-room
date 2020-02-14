import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Footer from './Footer';
import KegList from './KegList';
import AboutUs from './AboutUs';

import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <div className="App-header">
        <Header/>
      </div>

      <div className="App-body">
        <Switch>
          <Route exact path='/' component={KegList} />
          <Route path='/aboutus' component={AboutUs} />
        </Switch>
      </div>


      <div className="App-footer">
        <Footer/>
      </div>

      <style jsx>{`
          .App-header {
            height: 10vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: calc(8px + 3vmin);
            margin: 0px;
            color: white;
          }

          .App-body {
            height: 85vh;
            overflow-y: auto;
          }


          .App-footer {
            height: 5vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: calc(8px + 2vmin);
            margin: 0px;
            color: white;

          }
          `}</style>

      </div>
    );
  }

  export default App;
