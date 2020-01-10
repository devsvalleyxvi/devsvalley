import React from "react"
import Background from "../common/Background"
import { Container, Row, Col } from "reactstrap"

import bgCardShape from "../../assets/img/illustrations/bg-card-shape.jpg"
import corner3 from "../../assets/img/illustrations/corner-3.png"

export default () => {
  return (
    <footer className="pt-6 pt-lg-8 position-relative" id="contact">
      <Background image={bgCardShape} />
      <Background
        image={corner3}
        style={{
          backgroundSize: "contain",
          backgroundPosition: "right",
        }}
      />
      <Container>
        <Row>
          <Col md={11} lg={8}>
            <h1 className="fs-3 fs-md-4 fs-lg-5 fs-xl-6 display-3 mb-3">
              Ready to talk about your new website or application? Drop us a
              line at
            </h1>
            <a
              className="font-italic text-monospace font-weight-bold text-info fs-2 fs-md-3 fs-lg-4"
              href="mailto:devsvalley.xvi@gmail.com"
            >
              devsvalley.xvi@gmail.com
            </a>
          </Col>
        </Row>
        <Row className="mt-6 pb-4">
          <Col>
            <small>
              Copyright &copy; 2019 Devsvalley. All rights reserved.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
