import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'moment';
import './App.css';

import Header from './Header';
import Footer from './Footer';
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
        alcoholContent: '4.74',
        brand: 'Pabst Blue Ribbon',
        description: 'Its unique fermentation and maturation process results in a smooth, full bodied beer with a clean, crisp finish with a fine noble hop aroma.',
        id: 'abc2',
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
    this.handleSellPint = this.handleSellPint.bind(this);
  }

  handleSellPint(id){
    const newKegList = this.state.kegList.slice();
    const thisKeg = newKegList.find(e => e.id === id)
    if (thisKeg.stock < 1 ) {
      alert('😔   All out!')
    } else {
      thisKeg.stock -= 1;
      this.setState({kegList: newKegList});
    }
  }

  handleKegNew(newKeg){
    const newKegList = this.state.kegList.slice();
    newKeg.formattedWaitTime = (newKeg.tappedOn).fromNow(true);
    newKegList.push(newKeg);
    this.setState({kegList: newKegList});
  }

  handleNewKegSelected(keg){
    this.setState({kegFocus: keg});
    console.log(this.state.kegFocus);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
    this.updateKegTappedTime(),
    5000);
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
                  onSellPint={this.handleSellPint} />} />

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
        handleSellPint: PropTypes.func,
        handleNewKegSelected: PropTypes.func
      };

      export default App;
