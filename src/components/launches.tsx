//data query
import { useRocketsQuery } from "../generated/graphql";
// loader image
import Loader from "../assets/loade4.gif"

import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles";

import RocketCard from "./rocketCard"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '98%',
        paddingLeft: '1%',
        paddingRight: '1%'
    },
    heading: {
      color: theme.palette.primary.contrastText,
      margin: '1em 0 0.5em 10px',
      fontWeight: 'bold',
      fontFamily: ' serif',   
      textDecoration: 'underline',
      fontSize: '2em',
      lineHeight: '42px',
      textTransform: 'uppercase',
    }
}))
export default function Rockets() {
    const classes = useStyles();
    //data
    const { loading, error, data } = useRocketsQuery();

    if (loading) {
        return (
            <Grid container justify="center">
                <img src={Loader} height="200px" width="250px" alt="" />
            </Grid>
        );
    }
    if (error || !data) {
        return <h1 className="text-red-600">Please check your internet connection!</h1>;
    }

    return (
        <div className={classes.root}>

            <h2 style={{ marginLeft: '10px' }} className={classes.heading}>Rockets:</h2>

            <Grid container justify="center" spacing={window.innerWidth > 720 ? 2 : 1}>

                {!!data &&
                    data.rockets?.map((rocket) => {
                        return (
                            <Grid item xs={12} md={3} lg={3} xl={3} sm={10}>
                                <RocketCard Image={
                                    rocket?.flickr_images
                                        ? String(rocket.flickr_images[0])
                                        : "notAvilable"
                                } Name={rocket?.rocket_name} Description={rocket?.description} wikipediaLink={rocket?.wikipedia} />
                            </Grid>
                        )
                    })}
            </Grid>
        </div>

    );
};
