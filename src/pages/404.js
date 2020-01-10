import React from "react"
import Layout from "../components/layouts/Layout"
import Section from "../components/common/Section"
import { Row, Col } from "reactstrap"

import creating from "../assets/img/illustrations/creating.png"

export default () => (
  <Layout>
    <Section>
      <Row className="flex-center text-center">
        <Col lg="6">
          <h1 className="display-1 text-muted">404</h1>
          <p>This is awkward!</p>
        </Col>
        <Col>
          <img
            src={creating}
            alt="creating"
            className="card-img card-img-top"
          />
        </Col>
      </Row>
    </Section>
  </Layout>
)
