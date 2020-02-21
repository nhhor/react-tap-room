import React from 'react';
import './App.css';

function EditKeg(){

  return (

    <div className='newKegClass'>
      <h1>Edit a keg</h1>

      <form>
        <fieldset>
          <legend>Edit Keg:</legend>

          <label htmlFor="KegID">Keg ID:</label><br/>
          <input type="text" id="KegID" name="KegID"/><br/>

          <label htmlFor="name">Beer name:</label><br/>
          <input type="text" id="name" name="name"/><br/>

          <label htmlFor="type">Beer type:</label><br/>
          <input type="text" id="type" name="type"/><br/>

          <label htmlFor="brand">Beer brand:</label><br/>
          <input type="text" id="brand" name="brand"/><br/>

          <label htmlFor="alcoholContent">Alcohol content:</label><br/>
          <input type="text" id="alcoholContent" name="alcoholContent"/><br/>

          <label htmlFor="price">Price per pint:</label><br/>
          <input type="text" id="price" name="price"/><br/>

          <label htmlFor="stock">Stock in pints:</label><br/>
          <input type="text" id="stock" name="stock"/><br/>

          <label htmlFor="description">Beer description:</label><br/>
          <input type="text" id="description" name="description"/><br/><br/>

          <input type="submit" value="Submit"/>

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
      }


      `}</style>





    </div>
  );
}




export default EditKeg;
