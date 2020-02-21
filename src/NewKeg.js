import React from 'react';
import './App.css';

function NewKeg(){

  let _name = null;
  let _type = null;
  let _brand = null;
  let _alcoholContent = null;
  let _price = null;
  let _stock = null;
  let _description = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    console.log(_name.value);
    console.log(_type.value);
    console.log(_brand.value);

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
            ref={(input) => {_name = input;}}/>
        </fieldset>

        <fieldset className='fieldsetInput'>
          <legend>Beer type:</legend>
          <input
            className='inputClass'
            type="text"
            id="type"
            name="type"
            ref={(input) => {_type = input;}}/>
        </fieldset>

        <fieldset className='fieldsetInput'>
          <legend>Beer brand:</legend>
          <input
            className='inputClass'
            type="text"
            id="brand"
            name="brand"
            ref={(input) => {_brand = input;}}/>
        </fieldset>

        <fieldset className='fieldsetInput'>
          <legend>Alcohol content:</legend>
          <input
            className='inputClass'
            type="text"
            id="alcoholContent"
            name="alcoholContent"
            ref={(input) => {_alcoholContent = input;}}/>
        </fieldset>


        <fieldset className='fieldsetInput'>
          <legend>$/pint:</legend>
          <input
            className='inputClass'
            type="text"
            id="price"
            name="price"
            ref={(input) => {_price = input;}}/>
        </fieldset>


        <fieldset className='fieldsetInput'>
          <legend>Stock (in pints):</legend>
          <input
            className='inputClass'
            type="text"
            id="stock"
            name="stock"
            ref={(input) => {_stock = input;}}/>
        </fieldset>


        <fieldset className='fieldsetInput'>
          <legend>Description:</legend>
          <textarea
            className='inputClass'
            id="description"
            name="description"
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




export default NewKeg;
