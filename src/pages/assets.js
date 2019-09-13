import React from "react"
import { Link } from "gatsby"
import Asset from "../containers/assets/asset"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Assets = () => (
  <Layout>
    <SEO title="assetpairs" description="A crypto currency app" />
    <Asset />
  </Layout>
)

export default Assets
