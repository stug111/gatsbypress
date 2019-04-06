const path = require("path")
const slash = require("slash")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            id
            path
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }

  const { allWordpressPost } = result.data

  const postTemplate = path.resolve(`./src/template/post.js`)

  allWordpressPost.edges.forEach(edge =>
    createPage({
      path: edge.node.path,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  )
}
