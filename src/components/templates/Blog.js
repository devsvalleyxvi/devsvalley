import React from "react"
import Layout from "../layouts/Layout"
import Section from "../common/Section"
import { Row, Col, Badge, Breadcrumb, BreadcrumbItem } from "reactstrap"
import { Link } from "gatsby"

import { blog } from "./scss/blog.module.scss"

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
        tags
      }
    }
  }
`

export default ({ data }) => {
  const {
    markdownRemark: {
      html,
      timeToRead,
      frontmatter: { title, date, tags },
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
                <Link to="/blogs">Blogs</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{title}</BreadcrumbItem>
            </Breadcrumb>
            <p className="lead">
              {formattedDate} &bull; {timeToRead}min read
            </p>
            {tags.map((tag, index) => (
              <Badge color="soft-info" key={index} className="mr-1">
                {tag}
              </Badge>
            ))}
          </Col>
        </Row>
      </Section>
      <Section className={blog}>
        <Row className="justify-content-center">
          <Col lg={8} dangerouslySetInnerHTML={{ __html: html }} />
        </Row>
      </Section>
    </Layout>
  )
}
