import React from "react"
import logo from "../assets/logo-black.png"
import PageLinks from "../constants/links"
import { Link } from "gatsby"

const Navbar = ({ active }) => {
  return (
    <nav
      className="
    navbar navbar-expand-lg navbar-light
    bg-transparent
    px-sm-5
    fixed-top
  "
    >
      <Link className="navbar-brand" to="/">
        <img src={logo} height="60" alt="logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <PageLinks active={active} styleClass="navbar" />
      </div>
    </nav>
  )
}

export default Navbar
