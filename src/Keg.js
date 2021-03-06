import React from 'react';
import PropTypes from 'prop-types';
import KegIcon from './KegIcon.svg';
import InfoIcon from './InfoIcon.svg';

function Keg(props){

  function kegInformation() {
    if (props.currentRouterPath === '/Employee'){
      return (
        <div>

          <div onClick={() => {props.onNewKegSelected({name: props.name, type: props.type, brand: props.brand, alcoholContent: props.alcoholContent, price: props.price, stock: props.stock, formattedWaitTime: props.formattedWaitTime, description: props.description, id: props.id});}}>
            <img src={InfoIcon} className="infoIcon" alt="infoIcon" />
          </div>

          <p className='divGrid8 kegStockLeft'>({props.stock}<br/>pints left)</p>
          <button id={'kegButton' + props.id} className='divGrid9 kegSellButton' onClick={sellAPint}>Sell
            <br/>
            <br/>
            <img src={KegIcon} className="kegIcon" alt="kegIcon" />
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <p className='divGrid8 kegStockLeft'>({props.stock}<br/>pints left)</p>
          <button id={'kegButton' + props.id} className='divGrid9 kegSellButton'>
            <br/>
            <img src={KegIcon} className="kegIcon" alt="kegIcon" />
          </button>
        </div>
      );
    }
  }

  let stockPercent = parseInt(((props.stock/124)*100));
  let kegButtonID = ('kegButton' + props.id);

  function sellAPint() {
    props.onSellPint(props.id);
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
        <p className='divGrid7 kegTappedOn'>Tapped {props.formattedWaitTime} ago.</p>
        {kegInformation()}
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
          .divGrid8 { grid-area: 5 / 3 / 6 / 4; }
          .divGrid9 { grid-area: 5 / 4 / 6 / 5; }

          .parentGrid p {
            margin-top: 0px;
            margin-bottom: 0px;
          }

          .kegName {
            font-weight: bolder;
            background-color: rgba(1, 1, 1, .1);
            border-radius: 25%;
            height: 22px;
            margin-left: auto;
            margin-right: auto;
            width: 66%;
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

          .kegStockLeft {
            position: absolute;
            bottom: 10px;
            right: 17%;
            // height: 30px;

          }

          .kegSellButton {
            position: absolute;
            bottom: 10px;
            right: 10px;
            color: black;
            height: 45px;
            width: 35px;
            border-radius: 25%;
          }

          #${kegButtonID} {
            background: linear-gradient(0deg, rgba(0,255,0,.9) 0%, rgba(0,255,0,.9) ${stockPercent}%, rgba(255,0,0,.9) ${stockPercent}%, rgba(255,0,0,.9) 100%);
          }

          .kegBox {
            position: relative;
            background-color: rgba(0, 0, 64, .66);
            padding: 10px;
            margin: 10px;
            flex-grow: 1;
            flex-basis: 400px;
            max-width: 500px;
            border-radius: 5%;
            box-shadow: 5px 5px 5px rgba(0, 0, 0, .66);
          }

          .infoIcon {
            position: absolute;
            top: 15px;
            right: 10px;
            width: 30px;
            animation: infoIconSpin infinite 3s linear;
          }

          .kegIcon {
            position: absolute;
            bottom: -3px;
            right: 4px;
            width: 25px;
            animation: kegIconSpin infinite 5s linear;
          }

          @keyframes kegIconSpin {
            from {transform: rotateX(0deg);}
            to {transform: rotateX(360deg);}
          }

          @keyframes infoIconSpin {
            from {transform: rotateZ(0deg);}
            to {transform: rotateZ(360deg);}
          }

          `}</style>
    </div>
  );
}

Keg.propTypes = {
  alcoholContent: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  description: PropTypes.string,
  id: PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string, //removed 'isRequired' here only for pre-seeded data to not throw an error.
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  onNewKegSelected: PropTypes.func,
  onSellPint: PropTypes.func,
  currentRouterPath: PropTypes.string
};


export default Keg;
