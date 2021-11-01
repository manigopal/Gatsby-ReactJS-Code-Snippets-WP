import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

//import Layout from "../components/layout"
//import { useHeroBannerQuery } from "../../hooks/useHeroBannerQuery"
import { useSwiperHeroBannerQuery } from "../../hooks/UseSwiperHeroBannerQuery"
import { Wrapper, StyledImg } from "./SwiperHeroBanner.styles"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';

// import SEO from "../components/SEO/SEO"
import Img from "gatsby-image"


const sliderParams = {
  slidesPerView: "auto",
  centeredSlides: true,
}

const HeroBanner1 = () => {
  const {
    wpPage: { ACF_HomePage: data },
  } = useHeroBannerQuery1()

const imageData1 = getImage(data.herobanner1image.localfile)
const imageData2 = getImage(data.herobanner2image.localfile)
const imageData3 = getImage(data.herobanner3image.localfile)

  return (
     <Wrapper>
      <h1>Swiper version</h1>
      <p>It loads image in WebP and Jpeg.</p>
      {/* <Swiper {...sliderParams}> */}
      {/* {imageData} */}
      {/* <Img fluid={imageData1} />
      <Img fluid={imageData2} />
      <Img fluid={imageData3} /> */}

        {/* <Img fluid={data.ACF_HomePage.herobanner1image.childImageSharp.fluid} />
        <Img fluid={data.ACF_HomePage.herobanner2image.childImageSharp.fluid} />
        <Img fluid={data.ACF_HomePage.herobanner3image.childImageSharp.fluid} /> */}
      {/* </Swiper> */}

      {/* <StyledImg image={imageData1} alt="Hero Image" />
      <StyledImg image={imageData2} alt="Hero Image" />
      <StyledImg image={imageData3} alt="Hero Image" /> */}

      {/* {data.herobanner2text} */}
      <StyledImg image={imageData1} alt="Hero Image" />

     </Wrapper>
  )
}

export default HeroBanner1