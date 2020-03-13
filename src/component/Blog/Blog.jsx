import React from 'react'
import BlogThumbnail from './BlogThumbnail/BlogThumbnail'
import BreadCumb from '../Layout/BreadCumb/BreadCumb'

const Blog = (props) => (
  <React.Fragment>
    <BreadCumb breadCumbTitle={'blog'} />
    <BlogThumbnail />
  </React.Fragment>
)

export default Blog
