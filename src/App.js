import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'moment';
import './App.css';

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
        description: 'Little spicy, clove, faint banana, nice wheat twang, slightly floral, faint citrus, bready malt, and a little sweetness.',
        id: 'abc0',
        name: 'Hefe',
        price: '3.99',
        stock: 124,
        tappedOn: new Moment().subtract(2, 'days'),
        type: 'German Hefeweizen'
      },
      {
        alcoholContent: '5.1',
        brand: 'Pfriem',
        description: 'Sweet aromas of orange and spice, light-creamy flavor and a refreshing finish.',
        id: 'abc1',
        name: 'Wit',
        price: '4.98',
        stock: 119,
        tappedOn: new Moment().subtract(2, 'weeks'),
        type: 'Belgian Wit Ale'
      },
      {
        alcoholContent: '4.74',
        brand: 'Pabst Blue Ribbon',
        description: 'Its unique fermentation and maturation process results in a smooth, full bodied beer with a clean, crisp finish with a fine noble hop aroma.',
        id: 'abc2',
        name: 'Beer',
        price: '3.00',
        stock: 124,
        tappedOn: new Moment().subtract(2, 'months'),
        type: 'American Lager'
      }],
      kegFocus: 1
    };
    this.handleKegFocusClick = this.handleKegFocusClick.bind(this);
    this.handleKegNew = this.handleKegNew.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    5000);
  }

  updateTicketElapsedWaitTime() {
    console.log('check');
    let newkegList = this.state.kegList.slice();
    newkegList.forEach((keg) =>
      keg.formattedWaitTime = (keg.tappedOn).fromNow(true)
    );
    this.setState({kegList: newkegList});
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  handleKegNew(newKeg){
    var newKegList = this.state.kegList.slice();
    newKeg.formattedWaitTime = (newKeg.tappedOn).fromNow(true);
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
