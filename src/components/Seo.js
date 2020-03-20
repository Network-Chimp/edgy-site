/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import isDev from "../utils/isDev"

function SEO({ description, lang, meta, keywords, title, page = "index" }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            description {
              index
              fourOhFour
              legal
              termsOfService
              privacyPolicy
              cookiePolicy
              standardAgreement
            }
          }
        }
      }
    `
  )

  let metaDescription = description || site.siteMetadata.description[page]

  if (isDev()) {
    console.log("SEO Title:", title)
    console.log("SEO Meta Description:", metaDescription)
    console.log("SEO Meta Title:", site.siteMetadata.title)
    console.log("SEO Meta Keywords:", keywords.join(`, `))
    console.log("SEO Meta Images:", [
      {
        property: `og:title`,
        content: title,
      },
      {
        property: `og:description`,
        content: metaDescription,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        name: `twitter:card`,
        content: `summary`,
      },
      {
        name: `twitter:creator`,
        content: site.siteMetadata.author,
      },
      {
        name: `twitter:title`,
        content: title,
      },
      {
        name: `twitter:description`,
        content: metaDescription,
      },
    ])
    console.log("SEO Meta Misc:", meta)
  }

  return (
    <>
      <Helmet
        htmlAttributes={{ lang }}
        title={title}
        titleTemplate="Static.site | %s"
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.author,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ]
          .concat(
            keywords.length > 0
              ? {
                  name: `keywords`,
                  content: keywords.join(`, `),
                }
              : []
          )
          .concat(meta)}
      />
    </>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  page: PropTypes.string,
}

export default SEO
