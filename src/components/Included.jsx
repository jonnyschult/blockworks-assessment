import react from "react";
import { makeStyles } from "@mui/styles";
import {
  Button,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import data from "../assesset/imgTilesData";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "70vh",
  },
}));

const Included = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid container item>
        <p>INCLUDED IN ALL PLANS</p>
        <h1>All The TV You Love</h1>
        <p>
          Stream full seasons of exclusive series, current-season episodes, hit
          movies, Hulu Originals, kids shows, and more.{" "}
        </p>
      </Grid>
      <Grid container item>
        <ImageList
          sx={{ width: 500, height: 450 }}
          variant="woven"
          cols={3}
          gap={8}
        >
          {data.map((item) => {
            return (
              <ImageListItem key={item.img}>
                <img
                  src={item.img}
                  srcset={item.img}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  sx={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                  }}
                  title={item.title}
                  position="top"
                  actionPosition="left"
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </Grid>
    </Grid>
  );
};

export default Included;
