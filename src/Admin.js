import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';

function Admin(props){
  return (
    <div>
      <h2>Admin</h2>
      <KegList
        kegList={props.kegList}
        onSellPint={props.onSellPint}
        currentRouterPath={props.currentRouterPath} />
    </div>
  );
}

Admin.propTypes = {
  kegList: PropTypes.array,
  onSellPint: PropTypes.func,
  onKegNew: PropTypes.func,
  currentRouterPath: PropTypes.string.isRequired
};

export default Admin;
