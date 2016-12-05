import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { updateAppliedFilters, fetchPosts, changePage } from '../actions'
import Filters from '../components/Filters'
import Posts from '../components/Posts'
import Paginator from '../components/paginator/Paginator'

class App extends Component {
  static propTypes = {
    appliedFilters: PropTypes.objectOf(PropTypes.array).isRequired,
    mostRecentRequest: PropTypes.number.isRequired,
    posts: React.PropTypes.shape({
      items: React.PropTypes.array.isRequired,
      requestedAt: React.PropTypes.number.isRequired
    }).isRequired,
    currentPage: PropTypes.number.isRequired,
    pagesAvailable: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch, appliedFilters, currentPage } = this.props
    dispatch(fetchPosts(appliedFilters, currentPage))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.appliedFilters !== this.props.appliedFilters || 
        nextProps.currentPage !== this.props.currentPage) {
      const { dispatch, appliedFilters, currentPage } = nextProps
      dispatch(fetchPosts(appliedFilters, currentPage))
    }
  }

  makeFilterChangeHandler = (filterName) => {
    const dispatch = this.props.dispatch
    return (filtersApplied) => {
      dispatch(updateAppliedFilters(filterName, filtersApplied.map(filter => filter.value)))
    }
  }

  nextPageHandler = currentPage => {
    const dispatch = this.props.dispatch
    dispatch(changePage(currentPage + 1))
  }

  previousPageHandler = currentPage => {
    const dispatch = this.props.dispatch
    dispatch(changePage(currentPage - 1))
  }

  render() {
    const { posts, mostRecentRequest, appliedFilters, currentPage, pagesAvailable } = this.props
    const isEmpty = posts.items.length === 0
    const postsAreCurrent = mostRecentRequest === posts.requestedAt
    return (
      <span>
        <h3>Jobs from TheMuse</h3>
        <div className="row">
          <div className="five columns">
            <Filters changeHandlerMaker={this.makeFilterChangeHandler}
                     appliedFilters={appliedFilters} />
          </div>
          <div className="seven columns">
            {isEmpty
              ? (postsAreCurrent ? <h2>Empty.</h2> : <h2>Loading...</h2>)
              : <div style={postsAreCurrent ? {opacity: 1} : {pointerEvents: 'none', opacity:0.2}}>
                  <Posts posts={posts.items} />
                  <Paginator currentPage={currentPage}
                             pagesAvailable={pagesAvailable}
                             handleIncrement={this.nextPageHandler}
                             handleDecrement={this.previousPageHandler} />
                </div>
            }
          </div>
        </div>
      </span>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(App)
