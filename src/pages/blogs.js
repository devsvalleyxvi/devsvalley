import React from "react"
import Layout from "../components/layouts/Layout"
import Section from "../components/common/Section"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Row, Col } from "reactstrap"

export default () => {
  const blogsQuery = graphql`
    query {
      allMarkdownRemark(filter: { fields: { category: { eq: "blogs" } } }) {
        edges {
          node {
            id
            frontmatter {
              title
            }
            fields {
              category
              slug
            }
          }
        }
      }
    }
  `

  const blogs = useStaticQuery(blogsQuery)

  return (
    <Layout>
      <Section>
        <Row>
          <Col>
            <h1>Blogs</h1>
            <ul>
              {blogs.allMarkdownRemark.edges.map(
                ({
                  node: {
                    id,
                    frontmatter: { title },
                    fields: { category, slug },
                  },
                }) => (
                  <li key={id}>
                    <Link to={`/${category}/${slug}`}>{title}</Link>
                  </li>
                )
              )}
            </ul>
          </Col>
        </Row>
      </Section>
    </Layout>
  )
}
