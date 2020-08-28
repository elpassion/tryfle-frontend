import React from "react";
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
  console.log({ article });

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href={`posts/${article.id}`}>
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
              <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={'http://localhost:1337' + article.cover_photo.url}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.object,
};
