import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import KegList from './KegList';
import Error404 from './Error404';

import NewKeg from './NewKeg';
import EditKeg from './EditKeg';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      kegList: [],
      kegFocus: 1
    };
    this.handleKegFocusClick = this.handleKegFocusClick.bind(this);
    this.handleKegNew = this.handleKegNew.bind(this);
  }

  handleKegNew(){
console.log('Hiiiii, guyyyyyy.');
  }



  handleKegFocusClick(){
    const currentKegFocus = this.state.kegFocus;
    const newKegFocus = currentKegFocus + 1;
    this.setState({kegFocus: newKegFocus})
    console.log('kegFocus is currently set to:' + currentKegFocus);
  }

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <Header/>
        </div>

        <div className="App-body">
          <strong onClick={this.handleKegFocusClick}>Click me to change my state!</strong>
          <Switch>
            <Route exact path='/' component={KegList} />
            <Route path='/newkeg' render={()=><NewKeg onKegNew={this.handleKegNew} />} />
            <Route path='/editkeg' component={EditKeg} />
            <Route component={Error404} />
          </Switch>
        </div>




        <div className="App-footer">
          <Footer/>
        </div>

        <style>{`
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

  App.propTypes = {
    handleKegNew: PropTypes.func,
    handleKegFocusClick: PropTypes.func
  };

  export default App;
