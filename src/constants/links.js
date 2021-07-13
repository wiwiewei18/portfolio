import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "About",
    url: "/about/",
  },
  {
    id: 2,
    text: "Projects",
    url: "/projects/",
  },
  {
    id: 3,
    text: "Contact",
    url: "/contact/",
  },
]

export default ({ styleClass, active }) => {
  const tempLinks = data.map(link => {
    return (
      <li
        key={link.id}
        className={`${
          styleClass === "navbar"
            ? data.length > link.id
              ? "mr-4 navbar"
              : "navbar"
            : "foot-item"
        } ${active === link.text.toLowerCase() ? "active" : ""}`}
      >
        <Link
          to={link.url}
          className={styleClass === "navbar" ? "nav-link" : "foot-link"}
        >
          {link.text}
        </Link>
      </li>
    )
  })
  return (
    <ul
      className={styleClass === "navbar" ? "navbar-nav ml-auto" : "footer-foot"}
    >
      {tempLinks}
    </ul>
  )
}
