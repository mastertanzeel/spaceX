import BG from "../assets/cover-.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  alignItemsAndJustifyContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${BG})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: window.innerHeight,
    width: "100%",
  },
  headingStyle: {
    textAlign: "center",
    color: "yellow",
  },
  textStyle: {
    textAlign: "center",
    color: "yellow",
  },
}));

export default function Cover() {
  const classes = useStyles();
  return (
    <div className={classes.alignItemsAndJustifyContent}>
      <h1 className={classes.headingStyle}>SpaceX</h1>
      <p className={classes.textStyle} style={{ fontSize: "24px" }}>
        SpaceX designs, manufactures and launches advanced rockets and
        spacecraft. The company was founded in 2002 to revolutionize space
        technology, with the ultimate goal of enabling people to live on other
        planets.
      </p>
    </div>
  );
}
