import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PageBanner from "../components/PageBanner"

const Error = () => {
  return (
    <Layout>
      <SEO title="404" description="404 page of this website" />
      <PageBanner en="404" jp="ご指定のページは見つかりません" />
    </Layout>
  )
}

export default Error
