import gql from "graphql-tag";

export const ARTICLE_QUERY = gql`
  query Article($id: ID!) {
    article(id: $id) {
      id
      slug
      title
      intro_text
      content
      cover_photo {
        formats
        url
      }
      authors {
        full_name
      }
    }
  }
`

export default ARTICLE_QUERY;
