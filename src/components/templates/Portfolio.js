import React from "react"
import Layout from "../layouts/Layout"
import Section from "../common/Section"
import { Row, Col, Badge, Button, Breadcrumb, BreadcrumbItem } from "reactstrap"
import { Link } from "gatsby"

import bgCardShape from "../../assets/img/illustrations/bg-card-shape.jpg"

export const query = graphql`
  query($slug: String!, $category: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug }, category: { eq: $category } }
    ) {
      html
      timeToRead
      frontmatter {
        title
        date
        projectLink
        technologies
        client {
          name
          logo
          url
        }
      }
    }
  }
`

export default ({ data }) => {
  const {
    markdownRemark: {
      html,
      timeToRead,
      frontmatter: {
        title,
        date,
        projectLink,
        technologies,
        client: { name, logo, url },
      },
    },
  } = data

  const newDate = new Date(date)
  const formattedDate = newDate.toLocaleDateString("default", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })

  return (
    <Layout>
      <Section image={bgCardShape} position="right">
        <Row>
          <Col>
            <Breadcrumb className="fs-4 text-sans-serif font-weight-bold line-height-1">
              <BreadcrumbItem>
                <Link to="/portfolios">Portfolios</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{title}</BreadcrumbItem>
            </Breadcrumb>
            <p className="lead mb-0">
              {formattedDate} &bull; {timeToRead}min read
            </p>
          </Col>
        </Row>
      </Section>
      <Section>
        <Row>
          <Col lg={4} xl={3}>
            <h5>Project link:</h5>
            <Button
              color="link"
              className="px-0"
              size="xs"
              tag="a"
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              See preview
            </Button>
            <hr />
            <h5>Client:</h5>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={logo} alt={name} width={80} />
            </a>
            <hr />
            <h5>Technologies:</h5>
            {technologies.map((technology, index) => (
              <Badge color="soft-info" key={index} className="mr-1">
                {technology}
              </Badge>
            ))}
          </Col>
          <Col dangerouslySetInnerHTML={{ __html: html }} />
        </Row>
      </Section>
    </Layout>
  )
}
