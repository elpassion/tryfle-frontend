import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Query from "./query";
import ARTICLES_QUERY from "../../apollo/queries/article/articles";
import Markdown from './Markdown';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { title } = props;

  return (
    <Grid item xs={12} md={12}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <Query query={ARTICLES_QUERY} id={null}>
        {({ data: { articles } }) =>
          articles.map(({ title, slug }) =>
            <Markdown className={classes.markdown} key={slug}>
              {title}
            </Markdown>
          )}
      </Query>
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
