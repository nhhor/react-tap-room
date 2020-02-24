import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';
import EditKeg from './EditKeg';

function Employee(props){
  return (
    <div>
      <h2>Employee section:</h2>

      <EditKeg />

      <KegList
        kegList={props.kegList}
        onSellPint={props.onSellPint}
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

export default Employee;
