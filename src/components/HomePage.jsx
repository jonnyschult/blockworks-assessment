import react from "react";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import Splash from "./Splash";
import Included from "./Included";
import Promo from "./Promo";

const useStyles = makeStyles({});

const HomePage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Splash />
      <Included />
      <Promo />
    </Box>
  );
};

export default HomePage;
