import Cover from "./Cover";
import MissionTable from "./table";
import Rockets from "./rockets"
import { makeStyles } from "@material-ui/core/styles";
import Heart from "../assets/heart.png"

const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundImage: `linear-gradient(to bottom right, ${theme.palette.primary.light}, #1A202C)`,
  },
  footer: {
    textAlign: 'center',
    marginBottom: '0px',
    color: theme.coverPageText.text
  }
}));
export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Cover />
      <MissionTable />
      <Rockets />
      <h4 className={classes.footer}>Made with <img src={Heart} height="17px" width="20px" alt="" /> by <strong><a href="https://devtanzeel.web.app" rel="noopener noreferrer" target="_blank" style={{ textDecoration: 'none', color: 'purple' }}>TANZEEL UR REHMAN</a></strong></h4>
    </div>
  )
}

