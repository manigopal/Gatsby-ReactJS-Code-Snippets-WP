import React from "react"
import { useHeroBannerQuery } from "../../hooks/useHeroBannerQuery"
import { Wrapper } from "./HeroBanner.styles"
import Cta from "../CTA/CTA"

const HeroBanner = () => {
  const { cta } = useHeroBannerQuery()

  return (
    <Wrapper>
      {new Array(3).fill("").map((element, i) => (
        <Cta
          key={i}
          image={
            cta.ACF_HomePage[`cta${i + 1}Image`].localFile.childImageSharp
              .gatsbyImageData
          }
          link={cta.ACF_HomePage[`cta${i + 1}Link`]}
          text={cta.ACF_HomePage[`cta${i + 1}Text`]}
        />
      ))}
    </Wrapper>
  )
}

export default HeroBanner
