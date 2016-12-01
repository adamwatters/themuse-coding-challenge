import React, { PropTypes } from 'react'

const atLowerPageLimit = (currentPage) => { return currentPage === 0}

const atUpperPageLimit = (currentPage, pagesAvailable) => { return currentPage === pagesAvailable - 1 }

const PreviousPageButton = ({currentPage, handleDecrement}) => {
  return atLowerPageLimit(currentPage) ? (<button className='paginator_button paginator_button__inactive' 
                                     onClick={() => {}}>X</button>)
                          : (<button className='paginator_button'
                                     onClick={() => {handleDecrement(currentPage)}}>&lt;</button>)
}

const NextPageButton = ({currentPage, pagesAvailable, handleIncrement}) => {
  return atUpperPageLimit(currentPage, pagesAvailable) ? 
    (<button className='paginator_button paginator_button__inactive' 
             onClick={() => {}}>X</button>)
                          : 
    (<button className='paginator_button'
             onClick={() => {handleIncrement(currentPage, pagesAvailable)}}>&gt;</button>)
}

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

PreviousPageButton.propTypes = {
  currentPage: PropTypes.number.isRequired,
  handleDecrement: PropTypes.func.isRequired
}

NextPageButton.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pagesAvailable: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired
}

export default Paginator