import React from "react"
import Layout from "../components/Layout"
import PageBanner from "../components/PageBanner"
import brushImg from "../assets/brush-line.png"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout active="contact">
      <SEO title="Contact" description="Contact page of this website" />
      <PageBanner en="Contact" jp="お問い合わせ番号" />
      <div className="container contact-section py-5">
        <div className="row py-md-5">
          <div className="col-md-4">
            <div className="title text-center">
              <h2>連絡を取ります</h2>
              <div className="img mt-3 mb-2">
                <img src={brushImg} className="img-fluid" alt="brush line" />
              </div>
              <h2>Get in touch</h2>
            </div>
          </div>
          <div className="col-md-8">
            <form action="https://formspree.io/f/xpzklbra" method="POST">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  rows="2"
                ></textarea>
              </div>
              <div className="text-right">
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default contact
