import gql from "graphql-tag";

const TAGS_QUERY = gql`
  query Tags {
    tags(limit: 10, sort: "tag_name:asc") {
     id
     tag_name
   }
 }
`;

export default TAGS_QUERY;
