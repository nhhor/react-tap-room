import React from 'react';
import Keg from './Keg';



const kegList = [
  {
    tapNumber: 0,
    name: 'Hefe',
    type: 'American-style hefeweizen',
    brand: 'Widmer Brothers',
    alcoholContent: 4.9,
    price: 3.99,
    stock: 124,
    description: "It's ok."
  },
  {
    tapNumber: 1,
    name: 'Wit',
    type: 'Belgian Wit Ale',
    brand: 'Pfriem',
    alcoholContent: 5.1,
    price: 3.98,
    stock: 119,
    description: 'Sweet aromas of orange and spice, light-creamy flavor and a refreshing finish.'
  },

];

function KegList(){
  return (
    <div className="marketClass">
      <h2 className="kegListHeader"> Market Schedule </h2>
      {kegList.map((keg, index) =>
        <Keg tapNumber={index}
          name={keg.name}
          type={keg.type}
          brand={keg.brand}
          alcoholContent={keg.alcoholContent}
          price={keg.price}
          stock={keg.stock}
          description={keg.description}
          key={index}/>
      )}
      <style jsx>{`
          .marketClass {
            background-color: rgba(166, 250, 118, .3);
            border-radius: 25px;
          }
          .kegListHeader{
            margin: 0px;
            text-align: center;
            padding: 20px;
            border-bottom: 1px solid lightgrey;
          }
          `}</style>
      </div>
    );
  }

  export default KegList;
