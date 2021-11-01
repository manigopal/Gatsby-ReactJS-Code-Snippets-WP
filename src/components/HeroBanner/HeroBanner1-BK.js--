import React from "react"
import { Link } from "gatsby"
//import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage,getImage } from "gatsby-plugin-image"

//import Layout from "../components/layout"
//import { useHeroBannerQuery } from "../../hooks/useHeroBannerQuery"
import { useHeroBanner1Query } from "../../hooks/useHeroBannerQuery1"
import { Wrapper } from "./HeroBanner.styles"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';

//import SEO from "../components/seo"
import Img from "gatsby-image"


const sliderParams = {
  slidesPerView: "auto",
  centeredSlides: true,
}

const HeroBanner1 = () => {
  const {
    wpPage: { ACF_HomePage: data },
  } = useHeroBanner1Query()

const imageData1 = getImage(data.herobanner1image)
const imageData2 = getImage(data.herobanner2image)
const imageData3 = getImage(data.herobanner3image)

  return (
    <Wrapper>
      {/* <SEO title="Home" /> */}
      <h1>Swiper version</h1>
      <p>It loads image in WebP and Jpeg.</p>
      <Link to="/page-2/">Go to no Swiper version</Link>
      {/* <Swiper {...sliderParams}> */}
      {/* {imageData} */}
      {/* <Img fluid={imageData1} />
      <Img fluid={imageData2} />
      <Img fluid={imageData3} /> */}

        {/* <Img fluid={data.ACF_HomePage.herobanner1image.childImageSharp.fluid} />
        <Img fluid={data.ACF_HomePage.herobanner2image.childImageSharp.fluid} />
        <Img fluid={data.ACF_HomePage.herobanner3image.childImageSharp.fluid} /> */}
      {/* </Swiper> */}

      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 9000,
        }}
        navigation
        effect="fade"
      >
        {bannerSlides?.nodes.map((bannerSlide, index) => {
          return (
            <SwiperSlide
              className="relative flex justify-center items-center"
              key={bannerSlide?.id}
            >
              <GatsbyImage
                image={bannerSlide?.childImageSharp?.gatsbyImageData}
                alt="hero banner images"
                className="min-w-full min-h-[20rem] bg-image-darken"
              />
              {(function () {
                switch (index) {
                  case 0:
                    return (
                      <div className="w-10/12 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-3 lg:gap-y-8 font-PTSerif justify-center items-center pb-5">
                        <div className="font-bold text-lg lg:text-4xl flex items-center gap-x-5 text-center">
                          <span className="text-white text-center">
                            {/* {intl.formatMessage({ id: "herobanner1text" })} */}
                            { imageData1 }
                          </span>
                        </div>
                        <div className="font-bold text-xl lg:text-4xl text-white capitalize text-center">
                          {/* {intl.formatMessage({ id: "herobanner2text" })} */}
                          { imageData2 }
                        </div>
                        <div className="text-base lg:text-xl text-white text-center mb-3">
                          {/* {intl.formatMessage({ id: "herobanner3text" })} */}
                          { imageData3 }
                        </div>
                        {/* <RequestButton /> */}
                      </div>
                    )
                  case 1:
                    return (
                      <div className="w-10/12 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-2 lg:gap-y-8 font-PTSerif justify-center items-center">
                        <div className="font-bold text-xl lg:text-4xl flex items-center gap-x-5">
                          <span className="text-white text-center">
                            {/* {intl.formatMessage({ id: "herobanner1text" })} */}
                            { imageData1 }
                          </span>
                        </div>
                        <div className="font-bold text-lg lg:text-4xl text-white capitalize text-center">
                          {/* {intl.formatMessage({ id: "herobanner2text" })} */}
                          { imageData2 }
                        </div>
                        <div className="text-base lg:text-xl text-white text-center mb-3">
                          {/* {intl.formatMessage({ id: "herobanner3text" })} */}
                          { imageData3 }
                        </div>
                        {/* <RequestButton /> */}
                      </div>
                    )
                  default:
                    return null
                }
              })()}
            </SwiperSlide>
          )
        })}
      </Swiper>


    </Wrapper>
  )
}

export default HeroBanner1