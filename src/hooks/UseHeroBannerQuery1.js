import { useStaticQuery, graphql } from 'gatsby'

export const useHeroBanner1Query = () => {
  const data = useStaticQuery(graphql`

#   fragment herobannerImage on WpMediaItem {
#       localFile {
#         childImageSharp {
#           gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
#         }
#       }
#     }

    query HeroBanner1Query {
        wpPage(databaseId: { eq: 364 }) {
        ACF_HomePage {
          herobanner1link
          herobanner1text
          herobanner2link
          herobanner2text
          herobanner3link
          herobanner3text
          herobanner1image {
            # ...herobannerImage
            localFile {
            childImageSharp {
            gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
             }
            }
          }
          herobanner2image {
            # ...herobannerImage
            localFile {
            childImageSharp {
            gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
             }
            }
          }
          herobanner3image {
            # ...herobannerImage
            localFile {
            childImageSharp {
            gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
             }
            }
          }
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
