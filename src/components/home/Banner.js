import React from "react"
import Section from "../common/Section"
import bgCardShape from "../../assets/img/illustrations/bg-card-shape.jpg"
import illustration4 from "../../assets/img/illustrations/4.png"

const Banner = () => (
  <Section className="py-0" id="banner" image={bgCardShape}>
    <div className="row min-vh-100 flex-center">
      <div className="col-md-10 col-lg-6 py-8">
        <h1 className="fs-4 fs-md-5 mb-3">
          Converting, secure and well designed websites, applications delivered
          on time &amp; within budget
        </h1>
        <p className="lead mb-3">
          Over three years of experience in providing world-class web
          application, design and development.
        </p>
        <a
          className="btn btn-primary btn-sm hvr-sweep-top mr-2 mt-2"
          href="#contact"
          data-fancyscroll
        >
          Contact Us
        </a>
        <button className="btn btn-outline-primary btn-sm hvr-sweep-top mt-2">
          Hire Us
        </button>
      </div>
      <div className="col-md-10 col-lg">
        <img className="img-fluid" src={illustration4} alt="" />
      </div>
    </div>
  </Section>
)

export default Banner
