const path = require("path")
const startCase = require("lodash/startCase")
const toLower = require("lodash/toLower")

exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({ node, name: "slug", value: slug })

    const category = path
      .dirname(node.fileAbsolutePath)
      .split("/")
      .pop()
    createNodeField({ node, name: "category", value: category })
  }
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              category
              slug
            }
          }
        }
      }
    }
  `)

  response.data.allMarkdownRemark.edges.forEach(
    ({
      node: {
        fields: { category, slug },
      },
    }) => {
      createPage({
        component: path.resolve(
          `./src/components/templates/${startCase(
            toLower(category.slice(0, -1))
          )}.js`
        ),
        path: `/${category}/${slug}`,
        context: { category, slug },
      })
    }
  )
}
