exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const data = await graphql(
    `
      {
        allPortfolioJson {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )

  if (data.errors) {
    consolr.log("Error retrieving data".data.errors)
    return
  }

  const portfolioTemplate = require.resolve("./src/templates/PortfolioPage.js")

  data.data.allPortfolioJson.edges.forEach(edge => {
    createPage({
      path: `/portfolio/${edge.node.slug}/`,
      component: portfolioTemplate,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
