import React from 'react';
import PropTypes from 'prop-types';
import KegIcon from './KegIcon.svg';

function Keg(props){

  let count = 1;

  function handleClick(e) {
    e.preventDefault();
    let kegTarget = e.currentTarget.id
    let kegTargetId = kegTarget.slice(9)

    console.log('Click target was:', kegTargetId);
    console.log('Props stock is:', props.stock);

    let math = (props.stock - count);
    count += 1;

    console.log('Math yeilds:', math);
    document.getElementById("magic"+kegTargetId).innerHTML = math;

  }


  return (
    <div id={'kegBox' + props.id} className='kegBox'>

      <ul>

        <button id={'kegButton' + props.id} className='kegSellButton' onClick={handleClick}>Sell <img src={KegIcon} className="kegIcon" alt="kegIcon" /></button>

        <li className='kegText kegName'>{props.name}</li>
        <li className='kegText kegType'>{props.type}</li>
        <li className='kegText kegBrand'>{props.brand}</li>
        <li className='kegText kegAlcoholContent'>{props.alcoholContent}% abv</li>
        <li className='kegText kegPrice'>${props.price}/pint</li>
        <li className='kegText kegStock'><span id={'magic' + props.id}>{props.stock}</span> pints</li>
        <li className='kegText kegDescription'>{props.description}</li>

      </ul>

      <style>{`
          .kegText {
            color: #800303;
            margin: 0px;
          }

          .kegName {
            font-weight: bolder;
          }

          .kegSellButton {
            color: teal;
            // float: right;
            position: absolute;
            bottom: 10px;
            right: 10px;
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

  Keg.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    alcoholContent: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string,
    stock: PropTypes.number.isRequired
  };


  export default Keg;
