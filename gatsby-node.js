exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // todo:  create paginated pages for posts
  const postPerPage = 3
  const numpages = Math.ceil(data.allMdx.edges.length / postPerPage)

  Array.from({ length: numpages }).forEach((_, i) =>
    actions.createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: require.resolve("./src/templates/allPosts.js"),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numpages,
        currentPage: i + 1,
      },
    })
  )

  // todo:  create single blog post
  data.allMdx.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    const id = edge.node.id
    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/singlePost.js"),
      context: { id },
    })
  })
}
