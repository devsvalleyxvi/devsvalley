import React, { useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap"
import { Link, graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import logo from "../../assets/img/dv.png"

const SiteNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          socials {
            twitter
            github
            gitlab
            bitbucket
          }
        }
      }
    }
  `)

  const { title, socials } = data.site.siteMetadata

  return (
    <Navbar color="light" light expand="md">
      <Container>
        <NavbarBrand tag={Link} to="/">
          <img src={logo} alt={title} width={50} />
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink activeClassName="active" tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="active" tag={Link} to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="active" tag={Link} to="/portfolios">
                Portfolios
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="active" tag={Link} to="/blogs">
                Blogs
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            {Object.entries(socials).map((entry, index) => (
              <NavItem key={index}>
                <NavLink
                  href={entry[1]}
                  target="_blank"
                  className={`text-${entry[0]}`}
                >
                  <FontAwesomeIcon icon={["fab", entry[0]]} />
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default SiteNavbar
