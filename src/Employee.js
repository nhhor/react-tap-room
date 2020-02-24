import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';
import EditKeg from './EditKeg';

function Employee(props){

  let optionalSelectedTicketContent = null;
  if (props.kegFocus != null){
    optionalSelectedTicketContent =  <EditKeg
      onKegEdit={props.onKegEdit}
      kegFocus={props.kegFocus}/>;
  }

  return (
    <div>
      <h2>Employee section:</h2>

      {optionalSelectedTicketContent}

      <KegList
        kegList={props.kegList}
        onSellPint={props.onSellPint}
        onKegEdit={props.onKegEdit}
        onNewKegSelected={props.onNewKegSelected}
        currentRouterPath={props.currentRouterPath} />
    </div>
  );
}

Employee.propTypes = {
  kegList: PropTypes.array,
  onSellPint: PropTypes.func,
  onKegNew: PropTypes.func,
  onNewKegSelected: PropTypes.func,
  currentRouterPath: PropTypes.string.isRequired
};

Employee.propTypes = {
  kegFocus: PropTypes.object
};

export default Employee;
