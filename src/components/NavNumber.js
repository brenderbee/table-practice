import React from 'react';
import './../assets/css/NavNumber.css';
import PropTypes from 'prop-types';

function NavNumber(props) {

  function handleSendNewPage(number) {
    props.onChangeCurrentPage(parseInt(number, 10))
  }

  return (
    <div
      className="nav-number"
      onClick={() => handleSendNewPage(1)}
    >
      1
    </div>
  );
}

NavNumber.propTypes = {
  onChangeCurrentPage: PropTypes.func
};

export default NavNumber;
