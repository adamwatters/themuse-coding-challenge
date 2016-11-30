import React, { PropTypes } from 'react'

const Paginator = ({currentPage, handleIncrement, handleDecrement}) => (
  <div className="paginator">
    <button className="paginator_button" onClick={() => {handleDecrement(currentPage)}}>&lt;&lt;</button>
    <span className="paginator_page-number">Page {currentPage + 1}</span>
    <button className="paginator_button" onClick={() => {handleIncrement(currentPage)}}>&gt;&gt;</button>
  </div>
)

Paginator.propTypes = {
  currentPage: PropTypes.number.isRequired
}

export default Paginator