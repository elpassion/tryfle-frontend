import gql from 'graphql-tag';

export const AUTHOR_QUERY = gql`
  query Author($id: ID!) {
    author(id: $id) {
      id
      full_name
      bio
      cover {
        formats
        url
      }
      articles(limit: 3, sort: "created_at:desc") {
        id
        title
        intro_text
        cover_photo {
          url
        }
      }
    }
  }
`
