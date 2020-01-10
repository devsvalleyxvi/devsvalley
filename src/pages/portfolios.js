import React from "react"
import Layout from "../components/layouts/Layout"
import Section from "../components/common/Section"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Row, Col } from "reactstrap"

export default () => {
  const portfoliosQuery = graphql`
    query {
      allMarkdownRemark(
        filter: { fields: { category: { eq: "portfolios" } } }
      ) {
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

  const portfolios = useStaticQuery(portfoliosQuery)

  return (
    <Layout>
      <Section>
        <Row>
          <Col>
            <h1>Portfolios</h1>
            <ul>
              {portfolios.allMarkdownRemark.edges.map(
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
