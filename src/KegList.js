import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';

function KegList(props){
  return (
    <div className="">
      <h2 className="kegListHeader">Keg List</h2>
      <div className="kegListClass">
        {props.kegList.map((keg, index) =>
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
        <style>{`
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

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;
