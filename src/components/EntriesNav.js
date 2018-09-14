import React from 'react';
import NavNumber from './NavNumber';
import PropTypes from 'prop-types';

function EntriesNav(props) {
  return (
    <div>
      <NavNumber
        onChangeCurrentPage={props.onChangeCurrentPage}
      />
    </div>
  );
}

EntriesNav.propTypes = {
  onChangeCurrentPage: PropTypes.func,
  pages: PropTypes.number
};

export default EntriesNav;
