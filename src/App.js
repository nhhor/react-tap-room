import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import Moment from 'moment';


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
      kegList: [{
        alcoholContent: '4.9',
        brand: 'Widmer Brothers',
        description: 'It\'s ok.',
        id: 0,
        name: 'Hefe',
        price: '3.99',
        stock: 124,
        tappedOn: new Moment().subtract(2, 'days'),
        type: 'American-style hefeweizen'
      },
      {
        alcoholContent: '5.1',
        brand: 'Pfriem',
        description: 'Sweet aromas of orange and spice, light-creamy flavor and a refreshing finish.',
        id: 1,
        name: 'Wit',
        price: '3.98',
        stock: 119,
        tappedOn: new Moment().subtract(1, 'weeks'),
        type: 'Belgian Wit Ale'
      }],
      kegFocus: 1
    };
    this.handleKegFocusClick = this.handleKegFocusClick.bind(this);
    this.handleKegNew = this.handleKegNew.bind(this);
  }

  handleKegNew(newKeg){
    var newKegList = this.state.kegList.slice();
    newKegList.push(newKeg);
    this.setState({kegList: newKegList});
  }



  handleKegFocusClick(){
    const currentKegFocus = this.state.kegFocus;
    const newKegFocus = currentKegFocus + 1;
    this.setState({kegFocus: newKegFocus});
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
            <Route exact path='/' render={()=><KegList kegList={this.state.kegList} />} />
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
