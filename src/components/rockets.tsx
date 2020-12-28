//data query
import { useRocketsQuery } from "../generated/graphql";

import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles";

import RocketCard from "./rocketCard"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '98%',
        paddingLeft: '1%',
        paddingRight: '1%'
        // backgroundColor: '#EEEEEE'

    }
}))
export default function Rockets() {
    const classes = useStyles();
    //data
    const { loading, error, data } = useRocketsQuery();

    if (loading) {
        return (
            <h1>
                Loading...
            </h1>
        );
    }
    if (error || !data) {
        return <h1 className="text-red-600">Error!</h1>;
    }

    return (
        <div className={classes.root}>

            <Grid container justify="center" spacing={window.innerWidth > 720 ? 2 : 1}>

                {!!data &&
                    data.rockets?.map((rocket) => {
                        return (
                            <Grid item xs={12} md={6} lg={3} xl={3} sm={10}>
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
