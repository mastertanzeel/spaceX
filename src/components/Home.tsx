import Cover from "./Cover";
import MissionTable from "./table";
import Rockets from "./rockets"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundImage: `linear-gradient(to bottom right, ${theme.palette.primary.light}, #1A202C)`,
    },
  }));
export default function Home(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Cover />
            <MissionTable />
            <Rockets />
        </div>
    )
}

