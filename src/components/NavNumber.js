import React from 'react';
import './../assets/css/NavNumber.css';
import PropTypes from 'prop-types';

function NavNumber(props) {

  function handleSendNewPage(number) {
    props.onChangeCurrentPage(parseInt(number, 10))
  }

  function renderNumber(activePage, thisPage) {
    if (activePage === thisPage) {
      return 'nav-number current';
    }
    return 'nav-number';
  }

  return (
    <div
      className={renderNumber(props.currentPage, props.singlePage)}
      onClick={() => handleSendNewPage(props.singlePage)}
    >
      {props.singlePage}
    </div>
  );
}

NavNumber.propTypes = {
  onChangeCurrentPage: PropTypes.func,
  singlePage: PropTypes.number,
  currentPage: PropTypes.number
};

export default NavNumber;
