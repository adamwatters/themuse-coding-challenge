import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectCategory, fetchPostsIfNeeded, invalidateCategory } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

class App extends Component {
  static propTypes = {
    selectedCategory: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch, selectedCategory } = this.props
    dispatch(fetchPostsIfNeeded(selectedCategory))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedCategory !== this.props.selectedCategory) {
      const { dispatch, selectedCategory } = nextProps
      dispatch(fetchPostsIfNeeded(selectedCategory))
    }
  }

  handleChange = nextCategory => {
    this.props.dispatch(selectCategory(nextCategory))
  }

  handleRefreshClick = e => {
    e.preventDefault()

    const { dispatch, selectedCategory } = this.props
    dispatch(invalidateCategory(selectedCategory))
    dispatch(fetchPostsIfNeeded(selectedCategory))
  }

  render() {
    const { selectedCategory, posts, isFetching, lastUpdated } = this.props
    const isEmpty = posts.length === 0
    return (
      <div>
        <Picker value={selectedCategory}
                onChange={this.handleChange}
                options={[ 'Engineering', 'Education' ]} />
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
          }
          {!isFetching &&
            <a href="#"
               onClick={this.handleRefreshClick}>
              Refresh
            </a>
          }
        </p>
        {isEmpty
          ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
          : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
              <Posts posts={posts} />
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { selectedCategory, postsByCategory } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsByCategory[selectedCategory] || {
    isFetching: true,
    items: []
  }

  return {
    selectedCategory,
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)
