import React, { PropTypes } from 'react'
import PreviousPageButton from './PreviousPageButton'
import NextPageButton from './NextPageButton'

const Paginator = ({currentPage, pagesAvailable, handleIncrement, handleDecrement}) => (
  <div className="paginator">
    <PreviousPageButton currentPage={currentPage}
                        handleDecrement={handleDecrement}/>
    <span className="paginator_page-number">Page {currentPage + 1} of {pagesAvailable}</span>
    <NextPageButton currentPage={currentPage}
                    pagesAvailable={pagesAvailable}
                    handleIncrement={handleIncrement}/>
  </div>
)

Paginator.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pagesAvailable: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired
}

export default Paginator