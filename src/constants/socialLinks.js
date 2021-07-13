import React from "react"
import {
  FaWhatsappSquare,
  FaGithubSquare,
  FaInstagramSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaWhatsappSquare className="social-icon"></FaWhatsappSquare>,
    url:
      "https://api.whatsapp.com/send?phone=62895615540299&text=Hello%20Wiwie%20Sanjaya",
  },
  {
    id: 2,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/wiwiewei18",
  },
  {
    id: 3,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.instagram.com/wwwei180300/",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id} className="social-link">
      <a href={link.url}>{link.icon}</a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
