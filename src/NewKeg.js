import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import './App.css';

function NewKeg(props){

  let _name = null;
  let _type = null;
  let _brand = null;
  let _alcoholContent = null;
  let _price = null;
  let _stock = null;
  let _description = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();

    props.onKegNew({name: _name.value, type: _type.value, brand: _brand.value, alcoholContent: parseFloat(_alcoholContent.value).toFixed(2), price: parseFloat(_price.value).toFixed(2), stock: parseInt(_stock.value), description: _description.value, id: v4()});

    _name = '';
    _type = '';
    _brand = '';
    _alcoholContent = '';
    _price = '';
    _stock = '';
    _description = '';
  }

  return (

    <div className='newKegClass'>
      <h1>Add a Keg</h1>

      <form onSubmit={handleNewKegFormSubmission}>
        <fieldset><legend>New Keg:</legend>

        <fieldset className='fieldsetInput'>
          <legend>Beer name:</legend>
          <input
            className='inputClass'
            type="text"
            id="name"
            name="name"
            placeholder='Beer name (required)'
            required
            ref={(input) => {_name = input;}}/>
        </fieldset>

        <fieldset className='fieldsetInput'>
          <legend>Beer type:</legend>
          <input
            className='inputClass'
            type="text"
            id="type"
            name="type"
            placeholder='Beer type (required)'
            required
            ref={(input) => {_type = input;}}/>
        </fieldset>

        <fieldset className='fieldsetInput'>
          <legend>Beer brand:</legend>
          <input
            className='inputClass'
            type="text"
            id="brand"
            name="brand"
            placeholder='Beer brand (required)'
            required
            ref={(input) => {_brand = input;}}/>
        </fieldset>

        <fieldset className='fieldsetInput'>
          <legend>Alcohol content:</legend>
          <input
            className='inputClass'
            type="number"
            step="0.01"
            id="alcoholContent"
            name="alcoholContent"
            placeholder='Alcohol content (required)'
            required
            ref={(input) => {_alcoholContent = input;}}/>
        </fieldset>


        <fieldset className='fieldsetInput'>
          <legend>$/pint:</legend>
          <input
            className='inputClass'
            type="number"
            step="0.01"
            id="price"
            name="price"
            placeholder='Price per pint (required)'
            required
            ref={(input) => {_price = input;}}/>
        </fieldset>


        <fieldset className='fieldsetInput'>
          <legend>Stock (in pints):</legend>
          <input
            className='inputClass'
            type="number"
            id="stock"
            name="stock"
            placeholder='Stock (required)'
            required
            ref={(input) => {_stock = input;}}/>
        </fieldset>


        <fieldset className='fieldsetInput'>
          <legend>Description:</legend>
          <textarea
            className='inputClass'
            id="description"
            name="description"
            placeholder='Description'
            ref={(input) => {_description = input;}}/>

        </fieldset>

        <button type='submit'>Submit!</button>

      </fieldset>
    </form>


    <style>{`
        .newKegClass {
          position: relative;
          background-color: rgba(166, 250, 118, .1);
          padding: 10px;
          margin-left: 10%;
          margin-right: 10%;
          max-width: 80%;
          text-align: left;

        }

        .fieldsetInput {
          margin-left: 6%;
          margin-right: 3%;
        }

        .inputClass {
          width: 90%;
          margin-left: 6%;
          margin-right: 3%;
        }
        `}</style>
    </div>
  );
}

NewKeg.propTypes = {
  onKegNew: PropTypes.func
};


export default NewKeg;
