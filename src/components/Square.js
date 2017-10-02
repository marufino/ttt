import React from 'react';
import PropTypes from 'prop-types';
import '../sass/main.sass';

const Square = ({ value, inactive, onClick }) => (
  <div className={inactive ? 'square inactive' : 'square'} onClick={onClick}>
    {value}
  </div>
  );

Square.propTypes = {
  value: PropTypes.string.isRequired,
  inactive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Square;
