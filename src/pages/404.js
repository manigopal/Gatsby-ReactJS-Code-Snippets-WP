import * as React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/SEO/SEO"
import { Wrapper } from "./404.styles.js"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Wrapper>
    <h1>404: Not Found</h1> 
    <p>Oops! The Page you are looking has been removed or relocated.</p>
    </Wrapper>
  </Layout>
)

export default NotFoundPage