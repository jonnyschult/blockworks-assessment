import react from "react";
import { makeStyles } from "@mui/styles";
import { Button, Grid } from "@mui/material";
import bg from "../assesset/background.jpg";
import companiesImg from "../assesset/splash-company-logos.png";
import huluLogo from "../assesset/hulu.png";

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "70vh",
  },
  mainContainer: {
    paddingTop: "10vh",
    // background: "white",
  },
  text: {
    textAlign: "center",
    color: "white",
  },
  tagline: {
    fontWeight: "bold",
    fontSize: "1.5em",
  },
  huluTheme: {
    color: "#1ce783",
    fontWeight: "bold",
  },
  img: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  btn: {
    height: "2.5em",
    width: "10em",
  },
});

const Splash = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid
        container
        item
        justifyContent="center"
        alignContent="center"
        flexDirection="column"
        className={classes.mainContainer}
        lg={6}
      >
        <p className={`${classes.text} ${classes.huluTheme}`}>
          BUNDLE WITH ANY HULU PLAN & SAVE
        </p>
        <div>
          <img
            src={companiesImg}
            alt="Hulu related companies"
            className={classes.img}
          />
        </div>
        <p className={`${classes.text} ${classes.tagline}`}>
          Get endless entertainment, live sports, and the shows and movies you
          love.
        </p>
        <Button className={classes.btn}>GET THE DISNEY BUNDLE</Button>
        <p className={classes.text}>
          <a>See details</a> and <a>Bundle terms</a>.
        </p>
      </Grid>

      <Grid container item>
        <img src={huluLogo} alt="Hulu's company brand" />
        <Grid container item>
          <p className={classes.text}>TRY UP TO ONE MONTH FREE</p>
          <p className={classes.text}>
            Here just for Hulu? Get thousands of TV shows and movies.
          </p>
        </Grid>
        <Button>START YOUR FREE TRIAL</Button>
      </Grid>
    </Grid>
  );
};

export default Splash;
