import gql from "graphql-tag";

const LAST_ARTICLES_QUERY = gql`
  query Articles {
    articles(limit: 10, sort: "created_at:desc") {
     id
     title
     slug
     intro_text
     cover_photo {
      formats
      url
    }
   }
 }
`;

export default LAST_ARTICLES_QUERY;
