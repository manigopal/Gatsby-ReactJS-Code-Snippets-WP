import { useStaticQuery, graphql } from "gatsby"

export const useHeroBannerQuery = () => {
  const data = useStaticQuery(graphql`
    fragment herobannerImage on WpMediaItem {
      localFile {
        childImageSharp {
          gatsbyImageData(width: 720, placeholder: TRACED_SVG)
        }
      }
    }

    query HeroBannerQuery {
      cta: wpPage(databaseId: { eq: 364 }) {
        ACF_HomePage {
          herobanner1link
          herobanner1text
          herobanner2link
          herobanner2text
          herobanner3link
          herobanner3text
          herobanner1image {
            ...herobannerImage
          }
          herobanner2image {
            ...herobannerImage
          }
          herobanner3image {
            ...herobannerImage
          }
        }
      }
    }
  `)
  return data
}
