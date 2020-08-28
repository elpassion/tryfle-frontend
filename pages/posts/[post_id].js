import { CssBaseline, makeStyles, Paper, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import ARTICLE_QUERY from '../../apollo/queries/article/article';
import Query from '../../components/query';

const useStyles = makeStyles((theme) => ({
  authorHeader: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  authorContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}))

export default function Post() {
  const router = useRouter();
  const styles = useStyles();

  return (
    <>
      <Head>
        <title>Tryfle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <Container maxWidth="lg">
        <Query query={ARTICLE_QUERY} id={router.query.post_id}>
          {({ data: { article } }) =>
            <>
              <Paper className={styles.authorHeader} style={{ backgroundImage: `url(http://localhost:1337${article.cover_photo.url})` }}>
                <div className={styles.overlay} />
                <Grid container>
                  <Grid item md={6}>
                    <div className={styles.authorContent}>
                      <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                        {article.title}
                      </Typography>
                      {article.authors.map(author =>
                        <Typography component="h1" variant="h6" color="inherit" gutterBottom>
                          {author.full_name}
                        </Typography>
                      )}
                    </div>
                  </Grid>
                </Grid>
              </Paper>
              <Typography variant="h5" color="inherit" paragraph>
                {article.intro_text}
              </Typography>

              <Typography variant="p" color="inherit" paragraph>
                {article.content}
              </Typography>
            </>
          }
        </Query>
      </Container>
    </>
  )
}
