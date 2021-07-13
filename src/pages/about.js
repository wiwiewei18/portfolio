import React from "react"
import Layout from "../components/Layout"
import PageBanner from "../components/PageBanner"
import brushImg from "../assets/brush-line.png"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import SEO from "../components/SEO"

const About = ({
  data: {
    allStrapiAbout: { nodes },
  },
}) => {
  const { title, stack, image, info } = nodes[0]

  return (
    <Layout active="about">
      <SEO title="About" description="About page of this website" />
      <PageBanner en="About" jp="私につて" />
      <div className="about-section d-flex align-items-center py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <Image
                fluid={image.childImageSharp.fluid}
                className="img-fluid"
                alt="my profile pricture"
              />
            </div>
            <div className="col-12 col-md-6">
              <h2>{title}</h2>
              <div className="img mt-3 mb-2">
                <img src={brushImg} className="img-fluid" alt="brush line" />
              </div>
              <p className="text-justify">{info}</p>
              {stack.map(item => {
                return (
                  <span key={item.id} className="stack">
                    {item.title}
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About
