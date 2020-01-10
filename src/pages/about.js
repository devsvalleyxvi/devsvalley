import React from "react"
import Layout from "../components/layouts/Layout"
import Section from "../components/common/Section"
import { Row, Col } from "reactstrap"

export default () => (
  <Layout>
    <Section>
      <Row className="flex-center text-center">
        <Col lg="6">
          <h1 className="display-1 text-muted">About</h1>
        </Col>
      </Row>
    </Section>
  </Layout>
)
