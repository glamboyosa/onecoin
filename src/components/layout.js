import React from "react"
import Aux from "../hoc/auxiliary"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./Footer/Footer"
import Header from "./header/header"
import "../index.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Aux>
      <Header />
      <main>{children}</main>
      <Footer />
    </Aux>
  )
}

export default Layout
