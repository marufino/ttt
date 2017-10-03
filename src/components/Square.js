import React from 'react';
import PropTypes from 'prop-types';
import '../sass/main.sass';

function color(value) {
  return (value === 'X') ? 'blue' : 'red';
}

const Square = ({ value, inactive, onClick }) => (
  <div className={inactive ? 'square inactive' : 'square'} onClick={onClick}>
    <span style={{ color: color(value) }}>{value}</span>
  </div>
  );

Square.propTypes = {
  value: PropTypes.string.isRequired,
  inactive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Square;
