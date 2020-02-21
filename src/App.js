import React from 'react';
import './App.css';

import Header from './Header';
import Footer from './Footer';
import KegList from './KegList';
import Error404 from './Error404';

import NewKeg from './NewKeg';
import EditKeg from './EditKeg';

import { Switch, Route } from 'react-router-dom';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      kegList: [],
      kegFocus: 'test'
    };
  }

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <Header/>
        </div>

        <div className="App-body">
          <Switch>
            <Route exact path='/' component={KegList} />
            <Route path='/newkeg' component={NewKeg} />
            <Route path='/editkeg' component={EditKeg} />
            <Route component={Error404} />
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
              font-size: calc(8px + 2vmin);
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
              font-size: calc(8px + 1vmin);
              margin: 0px;
              color: white;

            }
            `}</style>

        </div>
      );
    }
  }

  export default App;
