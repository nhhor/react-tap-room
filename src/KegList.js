import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Keg from './Keg';
import KegIcon from './KegIcon.svg';
import InfoIcon from './InfoIcon.svg';


function KegList(props){
  function headerReturn() {
    if (props.currentRouterPath === '/Employee'){
      return (
        <div>
          <h2 className="kegListHeader"><em>EMPLOYEE</em> Keg List:</h2>
          <h3><em>Employees can sell-a-pint by clicking a keg`&apos;`s <img src={KegIcon} className="icon" alt="kegIcon" />[sell] button, or edit a keg by clicking a keg`&apos;`s <img src={InfoIcon} className="icon" alt="infoIcon" /> button, or add a keg <Link to="/NewKeg">here</Link>.</em></h3>
        </div>
      );
    } else {
      return (
        <div>
          <h2 className="kegListHeader">Keg List</h2>
        </div>
      );
    }
  }

  return (
    <div className="kegDivClass">
      {headerReturn()}
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
            onKegEdit={props.onKegEdit}
            onSellPint={props.onSellPint}
            onNewKegSelected={props.onNewKegSelected}
            currentRouterPath={props.currentRouterPath}
            key={keg.id}/>
        )}
        <style>{`
            .kegDivClass {
              background-color: rgba(0, 32, 0, .33);
              border-radius: 25px;
              min-height: 90vh;
            }

            .kegListClass {
              // background-color: rgba(0, 32, 0, .33);
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
            }

            .icon{
              width: 20px;
            }
            `}</style>
      </div>
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onSellPint: PropTypes.func,
  onKegEdit: PropTypes.func,
  onNewKegSelected: PropTypes.func,
  currentRouterPath: PropTypes.string
};

export default KegList;
