import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';
import './App.css';

function EditKeg(props){

  let _name = null;
  let _id = null;
  let _type = null;
  let _brand = null;
  let _alcoholContent = null;
  let _price = null;
  let _stock = null;
  let _formattedWaitTime = null;
  let _description = null;


  function handleEditKegFormSubmission(event) {
    event.preventDefault();

    let _inputTime = _formattedWaitTime.value.split(' ')
    let _newTime = `${_inputTime[0]}, '${_inputTime[1]}'`
    // console.log(_inputTime);
    console.log(_newTime);
    props.onKegEdit({name: _name.value, type: _type.value, brand: _brand.value, alcoholContent: parseFloat(_alcoholContent.value).toFixed(2), price: parseFloat(_price.value).toFixed(2), stock: parseInt(_stock.value), description: _description.value, id: _id.value, tappedOn: new Moment().subtract(99, 'days')});


    _name = '';
    _type = '';
    _brand = '';
    _alcoholContent = '';
    _price = '';
    _stock = '';
    _description = '';
  }

  return (

    <div className='editKegClass'>
      <h1>Edit Keg:</h1>

      <form onSubmit={handleEditKegFormSubmission}>
        <fieldset><legend>Edit this Keg of <em>{props.kegFocus.brand} {props.kegFocus.name}</em>:</legend>

          <input
            type="hidden"
            id="id"
            name="id"
            defaultValue={props.kegFocus.id}
            required
            ref={(input) => {_id = input;}}/>

          <fieldset className='fieldsetInput'>
            <legend>Beer name:</legend>
            <input
              className='inputClass'
              type="text"
              id="name"
              name="name"
              defaultValue={props.kegFocus.name}
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
              defaultValue={props.kegFocus.type}
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
              defaultValue={props.kegFocus.brand}
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
              defaultValue={props.kegFocus.alcoholContent}
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
              defaultValue={props.kegFocus.price}
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
              defaultValue={props.kegFocus.stock}
              required
              ref={(input) => {_stock = input;}}/>
          </fieldset>

          <fieldset className='fieldsetInput'>
            <legend>Tapped how long ago:</legend>
            <input
              className='inputClass'
              type="text"
              id="formattedWaitTime"
              name="formattedWaitTime"
              defaultValue={props.kegFocus.formattedWaitTime}
              required
              ref={(input) => {_formattedWaitTime = input;}}/>
          </fieldset>


          <fieldset className='fieldsetInput'>
            <legend>Description:</legend>
            <textarea
              className='inputClass'
              id="description"
              name="description"
              defaultValue={props.kegFocus.description}
              ref={(input) => {_description = input;}}/>

          </fieldset>

          <button type='submit'>Submit!</button>

        </fieldset>
      </form>


      <style>{`
        .editKegClass {
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

EditKeg.propTypes = {
  onKegEdit: PropTypes.func
};


export default EditKeg;
