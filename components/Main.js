import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';
import LAST_ARTICLES_QUERY from "../apollo/queries/article/articles";
import FeaturedPost from './FeaturedPost';
import Query from "./query";

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function Main(props) {
  const { title } = props;

  return (
    <Grid item xs={12} md={12}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={4} className={useStyles.router}>
        <Query query={LAST_ARTICLES_QUERY} id={null}>
          {({ data: { articles } }) =>
            articles.map(post =>
              <FeaturedPost key={post.title} post={post} />
            )}
        </Query>
      </Grid>
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
