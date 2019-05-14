import React from 'react'
import { graphql } from 'gatsby'

export default function Template({
  data,
}) {
  const { markdownRemark } = data
  const { frontMatter, html } = markdownRemark
  return (
    <div>
      <h1>{frontMatter.title}</h1>
      <h2>{frontMatter.date}</h2>
      <div dangerouslySetInnerHTML={{
        __html: html
      }}>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`