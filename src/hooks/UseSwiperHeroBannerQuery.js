import { useStaticQuery, graphql } from 'gatsby'

export const useSwiperHeroBannerQuery = () => {
  const data = useStaticQuery(graphql`
    query SwiperHeroBannerQuery {
      wpPage(databaseId: { eq: 364 }) {
        id
        ACF_HomePage {
          herobanner1link
          herobanner1text
          herobanner2link
          herobanner2text
          herobanner3link
          herobanner3text
          herobanner1image {
             localFile {
             childImageSharp {
             gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
              }
             }
           }
          # herobanner2image {
          #   localFile {
          #   childImageSharp {
          #   gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
          #    }
          #   }
          # }
          # herobanner3image {
          #   localFile {
          #   childImageSharp {
          #   gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
          #    }
          #   }
          # }
        }
      }
    #   wpPage(databaseId: { eq: 364 }) {
    #     id
    #     ACF_HomePage {
    #       heroText
    #       heroImage {
    #         localFile {
    #           childImageSharp {
    #             gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
    #           }
    #         }
    #       }
    #     }
    #   }
    }
  `)

  return data
}
