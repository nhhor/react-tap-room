import React from 'react';
import Keg from './Keg';

let kegListArray = [
  {
    kegID: 0,
    name: 'Hefe',
    type: 'American-style hefeweizen',
    brand: 'Widmer Brothers',
    alcoholContent: 4.9,
    price: 3.99,
    stock: 124,
    description: 'It\'s ok.'
  },
  {
    kegID: 1,
    name: 'Wit',
    type: 'Belgian Wit Ale',
    brand: 'Pfriem',
    alcoholContent: 5.1,
    price: 3.98,
    stock: 119,
    description: 'Sweet aromas of orange and spice, light-creamy flavor and a refreshing finish.'
  },
  {
    kegID: 2,
    name: 'Otra Vez',
    type: 'Belgian Wit Ale',
    brand: 'Sierra Nevada',
    alcoholContent: 4.9,
    price: 4.01,
    stock: 99,
    description: 'The bright lime flavor helps wake up the palate while the mild sweetness of the agave rounds out the tangy zip of the citrus fruit.'
  },
  {
    kegID: 0,
    name: 'Hefe',
    type: 'American-style hefeweizen',
    brand: 'Widmer Brothers',
    alcoholContent: 4.9,
    price: 3.99,
    stock: 124,
    description: 'It\'s ok.'
  },
  {
    kegID: 1,
    name: 'Wit',
    type: 'Belgian Wit Ale',
    brand: 'Pfriem',
    alcoholContent: 5.1,
    price: 3.98,
    stock: 119,
    description: 'Sweet aromas of orange and spice, light-creamy flavor and a refreshing finish.'
  },
  {
    kegID: 2,
    name: 'Otra Vez',
    type: 'Belgian Wit Ale',
    brand: 'Sierra Nevada',
    alcoholContent: 4.9,
    price: 4.01,
    stock: 99,
    description: 'The bright lime flavor helps wake up the palate while the mild sweetness of the agave rounds out the tangy zip of the citrus fruit.'
  },
];



function KegList(){
  return (
    <div className="">
      <h2 className="kegListHeader">Keg List</h2>
      <div className="kegListClass">
        {kegListArray.map((keg, index) =>
          <Keg kegID={index}
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
          .kegListClass {
            background-color: rgba(166, 250, 118, .3);
            border-radius: 25px;

            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            align-items: stretch;

          }

          .kegListHeader{
            margin: 0px;
            text-align: center;
            padding: 10px;
            border-bottom: 1px solid lightgrey;
          }
          `}</style>
      </div>
    </div>
  );
}

export default KegList;
