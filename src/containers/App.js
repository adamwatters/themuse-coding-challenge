import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectCategory, fetchPostsIfNeeded } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

class App extends Component {
  static propTypes = {
    selectedCategory: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
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
    dispatch(fetchPostsIfNeeded(selectedCategory))
  }

  render() {
    const { selectedCategory, posts, isFetching } = this.props
    const isEmpty = posts.length === 0
    return (
      <div>
        <Picker value={selectedCategory}
                onChange={this.handleChange}
                options={[ 'Engineering', 'Education' ]} />
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
  const { selectedCategory, postsByCategory, isFetching } = state
  const {
    items: posts
  } = postsByCategory['newPosts'] || {
    items: []
  }

  return {
    selectedCategory,
    posts,
    isFetching,
  }
}

export default connect(mapStateToProps)(App)
