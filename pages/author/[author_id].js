import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'
import { Card, makeStyles, Paper, Typography, Grid, Container, CssBaseline } from '@material-ui/core';
import Query from "../../components/query";
import ArticleCard from "../../components/ArticleCard";
import { AUTHOR_QUERY } from "../../apollo/queries/author";

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

export default function Author() {
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
        <Query query={AUTHOR_QUERY} id={router.query.author_id}>
          {({ data: {author} }) => 
            <>
              <Paper className={styles.authorHeader} style={{ backgroundImage: `url(http://localhost:1337${author.cover.url})`}}>
                {<img style={{ display: 'none' }} src={'http://localhost:1337' + author.cover.url} />}
                <div className={styles.overlay} />
                <Grid container>
                  <Grid item md={6}>
                    <div className={styles.authorContent}>
                      <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                        {author.full_name}
                      </Typography>
                      <Typography variant="h5" color="inherit" paragraph>
                        {author.bio}
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Paper>
              <Grid container spacing={4}>
                {author.articles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </Grid>
            </>
          }
        </Query>
      </Container>
    </>
  )
}
