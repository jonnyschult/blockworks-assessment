import react from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
    position: "absolute",
    height: "10vh",
    width: "98vw",
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    color: "white",
  },
}));

const Splash = () => {
  const classes = useStyles();
  return <header className={classes.header}>Burger</header>;
};

export default Splash;
