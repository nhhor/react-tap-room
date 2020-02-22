import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';

function KegList(props){
  return (
    <div className="">
      <h2 className="kegListHeader">Keg List</h2>
      <div className="kegListClass">
        {props.kegList.map((keg) =>
          <Keg name={keg.name}
            type={keg.type}
            brand={keg.brand}
            alcoholContent={keg.alcoholContent}
            price={keg.price}
            stock={keg.stock}
            formattedWaitTime={keg.formattedWaitTime}
            description={keg.description}
            id={keg.id}
            onSellPint={props.onSellPint}
            currentRouterPath={props.currentRouterPath}
            key={keg.id}/>
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
  kegList: PropTypes.array,
  onSellPint: PropTypes.func,
  currentRouterPath: PropTypes.string
};

export default KegList;
