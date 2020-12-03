import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout pageTitle="About Us">
    <SEO title="About" keyword={["gatsby", "application", "react"]} />
    <h1>Our Story</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, adipisci?
      Officia qui corrupti sed? Iste dolor repudiandae, molestiae cum eaque
      fugit, necessitatibus harum inventore laboriosam eveniet ut reprehenderit
      officiis deleniti at ad suscipit perspiciatis et expedita deserunt sunt
      vel porro!
    </p>
  </Layout>
)

export default AboutPage
