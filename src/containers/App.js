import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { changeCategorySelection, fetchPostsIfNeeded } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'
import CATEGORY_NAMES from '../data/categoryNames'
import COMPANY_NAMES from '../data/companyNames'

const categoryOptions = CATEGORY_NAMES.map(name => { return {value: name, label: name}})

class App extends Component {
  static propTypes = {
    selectedCategories: PropTypes.array.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch, selectedCategories } = this.props
    dispatch(fetchPostsIfNeeded(selectedCategories))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedCategories !== this.props.selectedCategories) {
      const { dispatch, selectedCategories } = nextProps
      dispatch(fetchPostsIfNeeded(selectedCategories))
    }
  }

  handleChange = categories => {
    this.props.dispatch(changeCategorySelection(categories.map(category => category.value)))
  }

  render() {
    const { posts, isFetching, selectedCategories } = this.props
    const isEmpty = posts.length === 0
    return (
      <div>
        <Picker onChange={this.handleChange}
                options={categoryOptions}
                values={selectedCategories} />
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
  return state
}

export default connect(mapStateToProps)(App)
