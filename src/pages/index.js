import React, { Component } from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import PostPreview from "../components/post/preview"
import MasonaryLayout from "../components/masonary/masonary"
import Container from "../components/UI/container/container"

class IndexPage extends Component {
  render() {
    const allPosts = this.props.data.allWordpressPost.edges
    return (
      <>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Hi people</h1>
        <Container>
          <MasonaryLayout>
            {allPosts.map(({ node }, index) => {
              const image = node.featured_media
              return (
                <PostPreview
                  post={node}
                  key={index}
                  image={image !== null ? true : false}
                />
              )
            })}
          </MasonaryLayout>
        </Container>
      </>
    )
  }
}

export const postAll = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          path
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 350) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
