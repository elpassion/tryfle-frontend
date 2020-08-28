const queryApi = async (query, { variables } = {}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_ENDPOINT}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    }
  );

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
};

export const getAuthorWithPosts = (id, numberOfPosts) => {
  return queryApi(
    `
    query Author($id: ID!, $numberOfPosts: Int!) {
      author(id: $id) {
        id
        full_name
        bio
        cover {
          formats
          url
        }
        articles(limit: $numberOfPosts, sort: "created_at:desc") {
          id
          title
          intro_text
          cover_photo {
            url
          }
        }
      }
    }
    `,
    { variables: { id, numberOfPosts } }
  ).then(({ author }) => author);
};
