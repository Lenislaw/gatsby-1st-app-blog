import React from "react"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"

const Footer = () => (
  <div className="site-footer">
    <h4 className="text-center">Code Blog</h4>
    <p className="text-center">Follow us on social media</p>
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <FaFacebookF size="2em" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            <FaTwitter size="2em" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <FaInstagram size="2em" />
          </a>
        </li>

        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <FaLinkedin size="2rem" />
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
