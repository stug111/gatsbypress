import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Img from "gatsby-image"
import style from "./preview.module.css"

const PostPreview = ({ post, image }) => {
  return (
    <Link to={post.path} className={style.post}>
      {image && (
        <Img fluid={post.featured_media.localFile.childImageSharp.fluid} />
      )}
    </Link>
  )
}

PostPreview.propTypes = {
  data: PropTypes.object,
  image: PropTypes.bool,
  content: PropTypes.bool,
}

PostPreview.defaultProps = {
  data: null,
  image: false,
  content: false,
}

export default PostPreview
