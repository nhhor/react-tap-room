import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'moment';
import './App.css';

import Header from './Header';
import KegList from './KegList';
import Employee from './Employee';
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
        stock: 120,
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
        stock: 31,
        tappedOn: new Moment().subtract(2, 'weeks'),
        type: 'Belgian Wit Ale'
      },
      {
        alcoholContent: '5.1',
        brand: 'Pfriem',
        description: 'Sweet aromas of orange and spice, light-creamy flavor and a refreshing finish.',
        id: 'abc2',
        name: 'Wit',
        price: '4.98',
        stock: 31,
        tappedOn: new Moment().subtract(2, 'weeks'),
        type: 'Belgian Wit Ale'
      },
      {
        alcoholContent: '5.1',
        brand: 'Pfriem',
        description: 'Sweet aromas of orange and spice, light-creamy flavor and a refreshing finish.',
        id: 'abc3',
        name: 'Wit',
        price: '4.98',
        stock: 31,
        tappedOn: new Moment().subtract(2, 'weeks'),
        type: 'Belgian Wit Ale'
      },
      {
        alcoholContent: '5.1',
        brand: 'Pfriem',
        description: 'Sweet aromas of orange and spice, light-creamy flavor and a refreshing finish.',
        id: 'abc4',
        name: 'Wit',
        price: '4.98',
        stock: 31,
        tappedOn: new Moment().subtract(2, 'weeks'),
        type: 'Belgian Wit Ale'
      },
      {
        alcoholContent: '5.1',
        brand: 'Pfriem',
        description: 'Sweet aromas of orange and spice, light-creamy flavor and a refreshing finish.',
        id: 'abc5',
        name: 'Wit',
        price: '4.98',
        stock: 31,
        tappedOn: new Moment().subtract(2, 'weeks'),
        type: 'Belgian Wit Ale'
      },
      {
        alcoholContent: '4.74',
        brand: 'Pabst Blue Ribbon',
        description: 'Its unique fermentation and maturation process results in a smooth, full bodied beer with a clean, crisp finish with a fine noble hop aroma.',
        id: 'abc6',
        name: 'Beer',
        price: '3.00',
        stock: 62,
        tappedOn: new Moment().subtract(2, 'months'),
        type: 'American Lager'
      }],
      kegFocus: null
    };
    this.handleNewKegSelected = this.handleNewKegSelected.bind(this);
    this.handleKegNew = this.handleKegNew.bind(this);
    this.handleKegEdit = this.handleKegEdit.bind(this);
    this.handleSellPint = this.handleSellPint.bind(this);
  }

  handleSellPint(id){
    const newKegList = this.state.kegList.slice();
    const thisKeg = newKegList.find(e => e.id === id);
    if (thisKeg.stock < 1 ) {
      alert('😔   All out!');
    } else {
      thisKeg.stock -= 1;
      this.setState({kegList: newKegList});
    }
  }

  handleKegEdit(keg){
    this.setState({kegFocus: null});
    const newKegList = this.state.kegList.slice();
    const thisKeg = newKegList.find(e => e.id === keg.id);
    thisKeg.name = keg.name;
    thisKeg.type = keg.type;
    thisKeg.brand = keg.brand;
    thisKeg.alcoholContent = keg.alcoholContent;
    thisKeg.price = keg.price;
    thisKeg.stock = keg.stock;
    thisKeg.description = keg.description;
    thisKeg.tappedOn = keg.tappedOn;
    this.setState({kegList: newKegList});
  }

  handleKegNew(newKeg){
    const newKegList = this.state.kegList.slice();
    newKeg.formattedWaitTime = (newKeg.tappedOn).fromNow(true);
    newKegList.push(newKeg);
    this.setState({kegList: newKegList});
  }

  handleNewKegSelected(keg){
    this.setState({kegFocus: keg});
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateKegTappedTime(),
    1000);
  }

  updateKegTappedTime() {
    let newkegList = this.state.kegList.slice();
    newkegList.forEach((keg) =>
      keg.formattedWaitTime = (keg.tappedOn).fromNow(true)
    );
    this.setState({kegList: newkegList});
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <Header/>
        </div>

        <div className="App-body">
          <Switch>
            <Route exact path='/' render={()=><KegList
              kegList={this.state.kegList} />} />
            <Route path='/newkeg' render={()=><NewKeg
              onKegNew={this.handleKegNew} />} />

            <Route path='/Employee' render={(props)=><Employee
              kegList={this.state.kegList}
              currentRouterPath={props.location.pathname}
              onNewKegSelected={this.handleNewKegSelected}
              onKegEdit={this.handleKegEdit}
              kegFocus={this.state.kegFocus}
              onSellPint={this.handleSellPint} />} />

            <Route path='/editkeg' component={EditKeg} />

            <Route component={Error404} />
          </Switch>
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
                  height: 90vh;
                  overflow-y: auto;
                }
                `}</style>

      </div>
    );
  }
}

App.propTypes = {
  handleKegNew: PropTypes.func,
  handleSellPint: PropTypes.func,
  handleKegEdit: PropTypes.func,
  kegFocus: PropTypes.object,
  handleNewKegSelected: PropTypes.func
};

export default App;
