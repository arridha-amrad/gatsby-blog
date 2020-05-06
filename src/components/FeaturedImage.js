import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FeaturedImageWrapper } from "../elements"

export const FeaturedImage = ({ fixed }) => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fixed: { originalName: { eq: "background.jpg" } }) {
        fixed(width: 1200) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  `)
  return (
    <FeaturedImageWrapper>
      <Img
        fixed={fixed ? fixed : data.imageSharp.fixed}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </FeaturedImageWrapper>
  )
}
