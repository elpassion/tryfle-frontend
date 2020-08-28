import gql from "graphql-tag";

const LAST_ARTICLES_QUERY = gql`
  query Articles {
    articles(limit: 10, sort: "created_at:desc") {
     id
     title
     intro_text
   }
 }
`;

export default LAST_ARTICLES_QUERY;
