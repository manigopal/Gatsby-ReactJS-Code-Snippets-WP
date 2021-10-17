import { useStaticQuery, graphql } from 'gatsby';

export const useMenuQuery = () => {
    const data = useStaticQuery(graphql`
    query MainMenuQuery {
        site {
          siteMetadata {
            title
          }
        }
        menu: wpMenu(name: {eq: "Main Menu"}) {
          menuItems {
            nodes {
              label
              url
              parentId
              id
              childItems {
                nodes {
                  label
                  url
                  id
                }
              }
            }
          }
        }
      }
    `)
    return data
}