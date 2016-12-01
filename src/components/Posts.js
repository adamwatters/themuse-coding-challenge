import React, { PropTypes } from 'react'

const Posts = ({posts}) => (
  <ul className='posts'>
    {posts.map((post, i) =>
      <li key={i}><a target='_blank' href={post.refs.landing_page}>{post.name}</a> @ {post.company.name}</li>
    )}
  </ul>
)

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts
