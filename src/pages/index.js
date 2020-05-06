import React from "react"
import { Container, FeaturedImage, Content, ContentCard } from "../components"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Container>
      <FeaturedImage />
      <Content>
        <ContentCard
          date="March 22, 2020"
          title="slkjdlkjfdgljdfsgj fdgsdfjg ldfjglsd fdsgsfd"
          excerpt="jfljfsd fsldjfsfjslkdf sdlfjsld fsdflksdjf sdflskdfjsldhfsdh dfhglsdjldj dfgldfjglsdjg dfgjdflg lsd fgj fgjsldgjldfjgklfd g dfg sdfgljdfgdfs gldfjgl fdjg ldjfglksdfjgl siuiusada."
          slug="/test"
        />
      </Content>
    </Container>
  )
}

export default IndexPage
