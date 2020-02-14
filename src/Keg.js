import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    console.log(props),
    <div id={props.tapNumber} className='kegBox'>
      <p className='kegText kegName'>{props.name}</p>
      <p className='kegText kegType'>{props.type}</p>
      <p className='kegText kegBrand'>{props.brand}</p>
      <p className='kegText kegAlcoholContent'>{props.alcoholContent}% abv</p>
      <p className='kegText kegPrice'>${props.price}/pint</p>
      <p className='kegText kegStock'>{props.stock} pints</p>
      <p className='kegText kegDescription'>{props.description}</p>
      <button>Sell</button>

      <style jsx>{`
          .kegText {
            color: #800303;
            line-height: 2px;
          }

          .kegBox{
            background-color: #fff;
            padding: 10px;
          }
          `}</style>
      </div>
    );
  }

  Keg.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    brand: PropTypes.string,
    alcoholContent: PropTypes.number,
    price: PropTypes.number,
    stock: PropTypes.number
  };


  export default Keg;
