import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import style from "./post.module.css"
import Container from "../components/UI/container/container"
import Layout from "../components/layout"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.allWordpressPost.edges[0].node
    const acf = post.acf.banner
    return (
      <Layout>
        {acf && (
          <BackgroundImage
            tag="section"
            className={style.banner}
            fluid={acf.image.localFile.childImageSharp.fluid}
          >
            <Container>
              <h2
                className={style.bannerTitle}
                dangerouslySetInnerHTML={{ __html: acf.title }}
              />
              <div
                className={style.bannerPretitle}
                dangerouslySetInnerHTML={{ __html: acf.pretitle }}
              />
            </Container>
          </BackgroundImage>
        )}
        <Container width={945}>
          <h1 className={style.title}>{post.title}</h1>
          <div className={style.pretitle}>
            {post.author && <span>by {post.author.name}</span>}
            <span>{post.date}</span>
          </div>
          {post.featured_media && (
            <Img
              fluid={post.featured_media.localFile.childImageSharp.fluid}
              className={style.image}
              objectFit="contain"
            />
          )}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Container>
      </Layout>
    )
  }
}

export const post = graphql`
  query($id: String!) {
    allWordpressPost(filter: { id: { eq: $id } }) {
      edges {
        node {
          title
          author {
            name
          }
          date(formatString: "MMMM DD, YYYY")
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 945, maxHeight: 480) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          content
          acf {
            banner {
              title
              pretitle
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1600, maxHeight: 350, quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default PostTemplate
