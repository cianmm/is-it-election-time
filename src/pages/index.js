import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IsItTime from "../components/IsItTime"

const IndexPage = () => (
  <Layout>
    <SEO title="Is It General Election Time?" />
    <IsItTime />
  </Layout>
)

export default IndexPage
