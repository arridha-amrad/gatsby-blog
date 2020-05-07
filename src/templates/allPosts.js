import React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Content,
  ContentCard,
  FeaturedImage,
  Pagination,
} from "../components"

import { H1, P } from "../elements"

const allPosts = ({ pageContext, data }) => {
  console.log(pageContext)
  const { currentPage, numpages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numpages
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`

  const posts = data.allMdx.edges
  return (
    <Container>
      <FeaturedImage />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          ljdsgjsd sdghfdhgl lglajgas
        </H1>
        <P color="dark2" text-align="center">
          lorem sdjas dasldjasd lasjdasl dlasjd asdaldshas dglasgalsdjg
          asdjlksdajgkas gasjdgkas dgasdjgaksd dasd sadasd asd asd asd asd asd
          asf sda a dsgag sdge rggasdjgasdk gasdgasdgaksldg a
        </P>

        {posts.map(post => (
          <ContentCard
            key={post.node.frontmatter.slug}
            date={post.node.frontmatter.date}
            title={post.node.frontmatter.title}
            excerpt={post.node.frontmatter.excerpt}
            slug={post.node.frontmatter.slug}
          />
        ))}
      </Content>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPAge={prevPage}
        nextPage={nextPage}
      />
    </Container>
  )
}

export const pageQuery = graphql`
  query AllPostQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "MMMM-DD-YYYY")
            excerpt
          }
        }
      }
    }
  }
`

export default allPosts
