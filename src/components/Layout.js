import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children, active }) => {
  return (
    <>
      <Navbar active={active} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
