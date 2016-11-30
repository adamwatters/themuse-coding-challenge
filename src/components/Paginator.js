import React, { PropTypes } from 'react'

const Paginator = ({currentPage, handleIncrement, handleDecrement}) => (
  <span>
    <button onClick={() => {handleDecrement(currentPage)}}>Previous</button>
    <p>on page {currentPage}</p>
    <button onClick={() => {handleIncrement(currentPage)}}>Next</button>
  </span>
)

Paginator.propTypes = {
  currentPage: PropTypes.number.isRequired
}

export default Paginator