import React, { PropTypes } from 'react'

const atLowerPageLimit = (currentPage) => { return currentPage === 0}

const PreviousPageButton = ({currentPage, handleDecrement}) => {
  return atLowerPageLimit(currentPage) ? (<button className='paginator_button paginator_button__inactive' 
                                     onClick={() => {}}>X</button>)
                          : (<button className='paginator_button'
                                     onClick={() => {handleDecrement(currentPage)}}>&lt;</button>)
}

PreviousPageButton.propTypes = {
  currentPage: PropTypes.number.isRequired,
  handleDecrement: PropTypes.func.isRequired
}

export default PreviousPageButton