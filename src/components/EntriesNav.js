import React from 'react';
import NavNumber from './NavNumber';
import './../assets/css/EntriesNav.css';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function EntriesNav(props) {
  let repeatingNums = [];
  for (let i = 0; i < props.pages; i++) {
    repeatingNums.push(
      <NavNumber
        onChangeCurrentPage={props.onChangeCurrentPage}
        singlePage={i + 1}
        key={v4()}
        currentPage={props.currentPage}
      />
    );
  }
  return (
    <div className="entries-nav">
      {repeatingNums}
    </div>
  );
}

EntriesNav.propTypes = {
  onChangeCurrentPage: PropTypes.func,
  pages: PropTypes.number,
  currentPage: PropTypes.number
};

export default EntriesNav;
