import React from "react"
import circleImg from "../assets/circle.png"

const PageBanner = ({ en, jp }) => {
  return (
    <div className="page-banner bg-paint d-flex align-items-center justify-content-center">
      <img src={circleImg} className="img-fluid" alt="circle brush" />
      <div className="center">
        <h1>{en}</h1>
      </div>
      <div className="center">
        <h2>{jp}</h2>
      </div>
    </div>
  )
}

export default PageBanner
