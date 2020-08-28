import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles(limit: 10, sort: "created_at:desc") {
     id
     title
     intro_text
   }
 }
`;

export default ARTICLES_QUERY;
