import React from "react";
import Link from 'next/link';
import PropTypes from "prop-types";
import {
  makeStyles,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Hidden,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function ArticleCard({ article }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6}>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="h2" variant="h5">
              {article.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {article.created_at}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {article.info_text}
            </Typography>
            <Link href="/posts/[post_id]" as={`/posts/${article.id}`}>
              <a>
                <Typography variant="subtitle1" color="primary">
                  Continue reading...
                </Typography>
              </a>
            </Link>
          </CardContent>
        </div>
        <Hidden xsDown>
          <CardMedia
            className={classes.cardMedia}
            image={'http://localhost:1337' + article.cover_photo.url}
          />
        </Hidden>
      </Card>
    </Grid>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.object,
};
