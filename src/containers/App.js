import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { updateAppliedFilters, fetchPostsIfNeeded } from '../actions'
import Filters from '../components/Filters'
import Posts from '../components/Posts'

class App extends Component {
  static propTypes = {
    appliedFilters: PropTypes.objectOf(PropTypes.array).isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch, appliedFilters } = this.props
    dispatch(fetchPostsIfNeeded(appliedFilters))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.appliedFilters !== this.props.appliedFilters) {
      const { dispatch, appliedFilters } = nextProps
      dispatch(fetchPostsIfNeeded(appliedFilters))
    }
  }

  makeFilterChangeHandler = (filterName) => {
    const dispatch = this.props.dispatch
    return (filtersApplied) => {
      dispatch(updateAppliedFilters(filterName, filtersApplied.map(filter => filter.value)))
    }
  }

  render() {
    const { posts, isFetching, appliedFilters } = this.props
    const isEmpty = posts.length === 0
    return (
      <div className="row">
        <div className="four columns">
          <Filters changeHandlerMaker={this.makeFilterChangeHandler}
                   appliedFilters={appliedFilters} />
        </div>
        <div className="eight columns">
          {isEmpty
            ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
            : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                <Posts posts={posts} />
              </div>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(App)
