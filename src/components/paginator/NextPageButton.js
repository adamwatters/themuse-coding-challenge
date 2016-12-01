import React, { PropTypes } from 'react'

const atUpperPageLimit = (currentPage, pagesAvailable) => { return currentPage === pagesAvailable - 1 }

const NextPageButton = ({currentPage, pagesAvailable, handleIncrement}) => {
  return atUpperPageLimit(currentPage, pagesAvailable) ? 
    (<button className='paginator_button paginator_button__inactive' 
             onClick={() => {}}>X</button>) : 
    (<button className='paginator_button'
             onClick={() => {handleIncrement(currentPage, pagesAvailable)}}>&gt;</button>)
}

NextPageButton.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pagesAvailable: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired
}

export default NextPageButton