import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home Page</h1>
    <StaticQuery
      query={indexQuery}
      render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
                // key={node.id}
                title={node.frontmatter.title}
                // slug={node.fields.slug}
                author={node.frontmatter.author}
                body={node.excerpt}
                date={node.frontmatter.date}
                // fluid={node.frontmatter.image.childImageSharp.fluid}
                // tags={node.frontmatter.tags}
                path={node.frontmatter.path}
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
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            path
          }

          excerpt
        }
      }
    }
  }
`

export default IndexPage
