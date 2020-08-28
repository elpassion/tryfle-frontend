import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TAGS_QUERY from '../apollo/queries/tag/tags'
import Header from './Header';
import Query from './query'
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const posts = [];

export default function BlogPost() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Query query={TAGS_QUERY} id={null}>
          {({ data: { tags } }) => <Header title="Blog" sections={tags} />}
        </Query>
        <main>
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer description="Made with ♥ during ELP Hackathon 2020" />
    </React.Fragment>
  );
}
