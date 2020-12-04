import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post"
import { Row, Col } from "reactstrap"
import Sidebar from "../components/Sidebar"

const IndexPage = () => (
  <Layout pageTitle="Code Blog">
    <SEO title="Home" />

    <StaticQuery
      query={indexQuery}
      render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
                key={node.id}
                title={node.frontmatter.title}
                slug={node.fields.slug}
                author={node.frontmatter.author}
                body={node.excerpt}
                date={node.frontmatter.date}
                fluid={node.frontmatter.image.childImageSharp.fluid}
                tags={node.frontmatter.tags}
              />
            ))}
            {/* <PaginationLinks currentPage={1} numberOfPages={numberOfPages} /> */}
          </div>
        )
      }}
    />
  </Layout>
)

const indexQuery = graphql`
  query indexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }

          excerpt
        }
      }
    }
  }
`

export default IndexPage
