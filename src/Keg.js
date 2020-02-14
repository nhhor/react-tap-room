import React from 'react';
import PropTypes from 'prop-types';
import KegIcon from './KegIcon.svg';

function Keg(props){
  return (
    console.log(props),
    <div id={'keg' + props.kegID} className='kegBox'>


      <p className='kegText kegName'>{props.name}</p>
      <p className='kegText kegType'>{props.type}</p>
      <p className='kegText kegBrand'>{props.brand}</p>
      <p className='kegText kegAlcoholContent'>{props.alcoholContent}% abv</p>
      <p className='kegText kegPrice'>${props.price}/pint</p>
      <p className='kegText kegStock'>{props.stock} pints</p>
      <p className='kegText kegDescription'>{props.description}</p>
      <button>Sell</button><img src={KegIcon} className="kegIcon" alt="kegIcon" />


      <style jsx>{`
          .kegText {
            color: #800303;
            margin: 0px;

          }

          .kegBox {
            background-color: rgba(166, 250, 118, .1);
            padding: 10px;
            margin: 10px;
            flex-grow: 1;
            flex-basis: 300px;
            max-width: 500px;

            // justify-self: flex-end;
            // align-self: flex-end;
            // align-self: stretch;
          }

          .kegIcon {
            width: 25px;
            animation: kegIconSpin infinite 5s linear;
          }

          @keyframes kegIconSpin {
            from {transform: rotate(0deg);}
            to {transform: rotate(360deg);}
          }

          `}</style>
    </div>
  );
}

Keg.propTypes = {
  kegID: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  brand: PropTypes.string,
  alcoholContent: PropTypes.number,
  price: PropTypes.number,
  stock: PropTypes.number
};


export default Keg;
