import React from "react"
import logo from "../assets/logo-black.png"
import PageLinks from "../constants/links"

const Footer = () => {
  return (
    <footer className="bg-paint p-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-5 col-sm-4 col-md-3 col-lg-2 mb-3 mb-sm-0">
            <img className="img-fluid" src={logo} alt="logo" />
          </div>
          <div className="col-5 d-block d-sm-none"></div>
          <div className="col text-center text-sm-right">
            <PageLinks styleClass="footer" />
          </div>
        </div>
        <div className="dropdown-divider my-3"></div>
        <div className="text-center">
          <span>Copyright &copy; WIWIE SANJAYA. All Rights Reserved</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
