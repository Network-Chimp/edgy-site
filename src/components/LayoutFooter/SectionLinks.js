import React from "react"
import ExternalFooterLink from "./ExternalFooterLink"
import FooterLink from "./FooterLink"

const SectionLinks = ({ links }) =>
  links.map(item => {
    if (item.external) {
      return (
        <ExternalFooterLink
          key={item.title}
          href={item.to}
          target="_blank"
          rel="nofollow noopener"
        >
          {item.title}
        </ExternalFooterLink>
      )
    }

    return (
      <FooterLink key={item.title} to={item.to}>
        {item.title}
      </FooterLink>
    )
  })

export default SectionLinks
