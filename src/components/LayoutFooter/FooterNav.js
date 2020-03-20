import React from "react"
import { media } from "../../theme"

const FooterNav = ({ children, title, layoutHasSidebar = false }) => (
  <div
    css={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      paddingTop: 40,
      marginRight: "2rem",
      [media.size("sidebarFixed")]: {
        paddingTop: 0,
        width: "25%",
      },
    }}
  >
    <div
      css={{
        display: "inline-flex",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  </div>
)

export default FooterNav
