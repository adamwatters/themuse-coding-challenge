import React, { PropTypes } from 'react'

const Paginator = ({currentPage, pagesAvailable, handleIncrement, handleDecrement}) => (
  <div className="paginator">
    <button className="paginator_button" onClick={() => {handleDecrement(currentPage)}}>&lt;&lt;</button>
    <span className="paginator_page-number">Page {currentPage + 1} of {pagesAvailable}</span>
    <button className="paginator_button" onClick={() => {handleIncrement(currentPage, pagesAvailable)}}>&gt;&gt;</button>
  </div>
)

Paginator.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pagesAvailable: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
}

export default Paginator