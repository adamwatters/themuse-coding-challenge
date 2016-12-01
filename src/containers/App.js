import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { updateAppliedFilters, fetchPostsIfNeeded, changePage } from '../actions'
import Filters from '../components/Filters'
import Posts from '../components/Posts'
import Paginator from '../components/paginator/Paginator'

class App extends Component {
  static propTypes = {
    appliedFilters: PropTypes.objectOf(PropTypes.array).isRequired,
    posts: PropTypes.array.isRequired,
    currentPage: PropTypes.number.isRequired,
    pagesAvailable: PropTypes.number.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch, appliedFilters, currentPage } = this.props
    dispatch(fetchPostsIfNeeded(appliedFilters, currentPage))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.appliedFilters !== this.props.appliedFilters || 
        nextProps.currentPage !== this.props.currentPage) {
      const { dispatch, appliedFilters, currentPage } = nextProps
      dispatch(fetchPostsIfNeeded(appliedFilters, currentPage))
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
    const { posts, isFetching, appliedFilters, currentPage, pagesAvailable } = this.props
    const isEmpty = posts.length === 0
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
              ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
              : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                  <Posts posts={posts} />
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
