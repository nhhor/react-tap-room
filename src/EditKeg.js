import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';
import { withRouter } from 'react-router-dom';
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
    let _newTime = parseInt(_inputTime[0]);
    let _newSpan = "'" + _inputTime[1] + "'";
    console.log(_newSpan);
    props.onKegEdit({name: _name.value, type: _type.value, brand: _brand.value, alcoholContent: parseFloat(_alcoholContent.value).toFixed(2), price: parseFloat(_price.value).toFixed(2), stock: parseInt(_stock.value), description: _description.value, id: _id.value, tappedOn: new Moment().subtract(_newTime, 'days')});

    _name = '';
    _type = '';
    _brand = '';
    _alcoholContent = '';
    _price = '';
    _stock = '';
    _description = '';

    props.history.push('/');

  }

  return (

    <div className='editKegClass' id='editKegID'>
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
              key={`props.kegFocus.name:${props.kegFocus.name} || _name`}
              defaultValue={props.kegFocus.name || _name}
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
              key={`props.kegFocus.type:${props.kegFocus.type} || _type`}
              defaultValue={props.kegFocus.type || _type}
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
              key={`props.kegFocus.brand:${props.kegFocus.brand} || _brand`}
              defaultValue={props.kegFocus.brand || _brand}
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
              key={`props.kegFocus.alcoholContent:${props.kegFocus.alcoholContent} || _alcoholContent`}
              defaultValue={props.kegFocus.alcoholContent || _alcoholContent}
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
              key={`props.kegFocus.price:${props.kegFocus.price} || _price`}
              defaultValue={props.kegFocus.price || _price}
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
              key={`props.kegFocus.stock:${props.kegFocus.stock} || _stock`}
              defaultValue={props.kegFocus.stock || _stock}
              required
              ref={(input) => {_stock = input;}}/>
          </fieldset>

          <fieldset className='fieldsetInput'>
            <legend>Tapped how long ago [in ## of days]:</legend>
            <input
              className='inputClass'
              type="text"
              id="formattedWaitTime"
              name="formattedWaitTime"
              key={`props.kegFocus.formattedWaitTime:${props.kegFocus.formattedWaitTime} || _formattedWaitTime`}
              defaultValue={props.kegFocus.formattedWaitTime || _formattedWaitTime}
              required
              ref={(input) => {_formattedWaitTime = input;}}/>
          </fieldset>


          <fieldset className='fieldsetInput'>
            <legend>Description:</legend>
            <textarea
              className='inputClass'
              id="description"
              name="description"
              key={`props.kegFocus.description:${props.kegFocus.description} || _description`}
              defaultValue={props.kegFocus.description || _description}
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


export default withRouter(EditKeg);
