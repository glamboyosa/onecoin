import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Index from "../containers/index/index"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="A crypto app" />
    <Index />
  </Layout>
)

export default IndexPage
