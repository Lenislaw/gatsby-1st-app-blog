import React from "react"
import Layout from "../components/layout"
import Sidebar from "../components/Sidebar"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { Row, Col, CardBody, Card, Badge, CardSubtitle } from "reactstrap"
import Img from "gatsby-image"
import { slugify } from "../util/utilityFunctions"
import authors from "../util/authors"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"

const SinglePost = ({ data, pageContext }) => {
  const post = data.markdownRemark.frontmatter
  const author = authors.find(x => x.name === post.author)

  const baseUrl = "https://gatsbytutorial.co.uk"
  return (
    <Layout
      pageTitle={post.title}
      postAuthor={author}
      authorImageFluid={data.file.childImageSharp.fluid}
    >
      <SEO title={post.title} />

      <Card>
        <Img
          className="card-image-top"
          fluid={post.image.childImageSharp.fluid}
        />
        <CardBody>
          <CardSubtitle>
            <span className="text-info">{post.date}</span>by{" "}
            <span className="text-info">{post.author}</span>
          </CardSubtitle>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          <ul className="post-tags">
            {post.tags.map(tag => (
              <li key={tag}>
                <Link to={`/tag/${slugify(tag)}`}>
                  <Badge color="primary">{tag}</Badge>
                </Link>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
      <h3 className="text-center">Share this post</h3>
      <div className="text-center social-share-links">
        <ul>
          <li>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${baseUrl}${pageContext.slug}`}
              className="facebook"
              target="_black"
              rel="noopener noreferrer"
            >
              <FaFacebookF size="2rem" />
            </a>
          </li>
          <li>
            <a
              href={`https://www.twitter.com/share?url=${baseUrl}${pageContext.slug}&text=${post.title}$via"twitterhanlder"`}
              className="twitter"
              target="_black"
              rel="noopener noreferrer"
            >
              <FaTwitter size="2rem" />
            </a>
          </li>
          {/* <li>
            <a
              href={`https://www.plus.google.com/share?url=${baseUrl}${pageContext.slug}`}
              className="google"
              target="_black"
              rel="noopener noreferrer"
            >
              <FaGoogle size="2rem" />
            </a>
          </li> */}
          <li>
            <a
              href={`https://www.linkedin.com/shareArticle?url=${baseUrl}${pageContext.slug}`}
              className="linkedin"
              target="_black"
              rel="noopener noreferrer"
            >
              <FaLinkedin size="2rem" />
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}
export const postQuery = graphql`
  query blogPostBySlug($slug: String!, $imageUrl: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date(formatString: "MMM Do YYYY")
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    file(relativePath: { eq: $imageUrl }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default SinglePost
