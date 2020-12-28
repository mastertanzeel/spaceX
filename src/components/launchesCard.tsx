import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme: any) => ({
  root: {
    height: "480px",
    backgroundColor: theme.palette.primary.main
  },
  button: {
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: theme.darkButton.hoverColor
  }

  }
}))
export default function LaunchCard(props: {
  Image: any;
  Name: any;
  Description: any;
  wikipediaLink: any;
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.Name}
          height="250"
          image={props.Image}
          title={props.Name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
          >
            {props.Name}
          </Typography>
          <Typography
            variant="body2"
            className="desc"
            color="textSecondary"
            component="p"
          >
            {props.Description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          onClick={() => window.open(`${props.wikipediaLink}`)}
          fullWidth
          color="secondary"
          variant="contained"
          className={classes.button}
        >
          <strong>Wikipedia</strong>
        </Button>
      </CardActions>
    </Card>
  );
}
