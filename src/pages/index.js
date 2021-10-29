import * as React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/SEO/SEO"
import Hero from "../components/Hero/Hero"
//import HeroBanner from "../components/HeroBanner/HeroBanner"
import HeroBanner1 from "../components/HeroBanner/HeroBanner1"
import CtaArea from "../components/CTAArea/CTAArea"
import LatestBlogPost from "../components/LatestBlogPost/LatestBlogPost"
import Quote from "../components/Quote/Quote"
import About from "../components/About/About"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    {/* <HeroBanner /> */}
    <HeroBanner1 />
    <CtaArea />
    <LatestBlogPost />
    <Quote />
    <About />
  </Layout>
)

export default IndexPage
