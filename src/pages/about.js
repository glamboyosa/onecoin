import React from "react"
import { Link } from "gatsby"
import About from "../components/about/about"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About" description="A crypto currency app" />
    <About />
  </Layout>
)

export default SecondPage
