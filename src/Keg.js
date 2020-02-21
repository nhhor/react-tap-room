import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import KegIcon from './KegIcon.svg';

function Keg(props){

  let count = 1;

  function handleClick(e) {
    e.preventDefault();
    console.log(props.tappedOn._d);
    let kegTarget = e.currentTarget.id;
    let kegTargetId = kegTarget.slice(9);
    let math = (props.stock - count);
    count += 1;
    document.getElementById('magic'+kegTargetId).innerHTML = (math);
  }


  return (
    <div id={'kegBox' + props.id} className='kegBox'>

      <div className='parentGrid'>


        <p className='divGrid1 kegName'>{props.name}</p>
        <p className='divGrid2 kegType'>• {props.type}</p>
        <p className='divGrid3 kegBrand'>~{props.brand}</p>
        <p className='divGrid4 kegDescription'>{props.description}</p>
        <p className='divGrid5 kegAlcoholContent'>{props.alcoholContent}% abv</p>
        <p className='divGrid6 kegPrice'>${props.price}/pint</p>
        <p className='divGrid7 kegTappedOn'>Tapped {displayTimeOpen(props.tappedOn)} ago.</p>
        <p className='divGrid8 kegStockSell'>(<span id={'magic' + props.id}>{props.stock}</span> pints left) <button id={'kegButton' + props.id} className='kegSellButton' onClick={handleClick}>Sell <img src={KegIcon} className="kegIcon" alt="kegIcon" /></button></p>


      </div>

      <style>{`

          .parentGrid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: 40px 50px 1fr repeat(2, 40px);
            grid-column-gap: 10px;
            grid-row-gap: 0px;
          }

          .divGrid1 { grid-area: 1 / 1 / 2 / 5; }
          .divGrid2 { grid-area: 2 / 1 / 3 / 3; }
          .divGrid3 { grid-area: 2 / 3 / 3 / 5; }
          .divGrid4 { grid-area: 3 / 1 / 5 / 4; }
          .divGrid5 { grid-area: 3 / 4 / 4 / 5; }
          .divGrid6 { grid-area: 4 / 4 / 5 / 5; }
          .divGrid7 { grid-area: 5 / 1 / 6 / 3; }
          .divGrid8 { grid-area: 5 / 3 / 6 / 5; }

          .parentGrid p {
            margin-top: 0px;
            margin-bottom: 0px;
          }

          .kegName {
            font-weight: bolder;
            background-color: rgba(1, 1, 1, .1);
            border-radius: 25%;
          }

          .kegType {
            text-align: left;
          }

          .kegBrand {
            text-align: right;
          }

          .kegAlcoholContent {
            text-align: right;
          }

          .kegPrice {
            position: absolute;
            bottom: 60px;
            right: 10px;
          }

          .kegTappedOn {
            position: absolute;
            bottom: 10px;
            left: 10px;
          }

          .kegStockSell {
            position: absolute;
            bottom: 10px;
            right: 10px;
          }

          .kegSellButton {
            color: teal;
            background-color: rgba(11, 11, 11, .5);
            border-radius: 25%;
          }

          .kegBox {
            position: relative;
            background-color: rgba(166, 250, 118, .1);
            padding: 10px;
            margin: 10px;
            flex-grow: 1;
            flex-basis: 300px;
            max-width: 500px;
          }

          .kegIcon {
            // float: left;

            width: 25px;
            animation: kegIconSpin infinite 5s linear;
          }

          @idframes kegIconSpin {
            from {transform: rotate(0deg);}
            to {transform: rotate(360deg);}
          }

          `}</style>
    </div>
  );
}

function displayTimeOpen(tappedOn) {
  return tappedOn.from(new Moment(), true);
}

Keg.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string,
  tappedOn: PropTypes.instanceOf(Moment).isRequired,
  stock: PropTypes.number.isRequired
};


export default Keg;
