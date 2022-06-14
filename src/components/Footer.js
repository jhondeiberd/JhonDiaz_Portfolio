import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "navy",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "white",
      "&:hover": {
        fill: "#4f94d4",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<LinkedIn />} a href="https://www.linkedin.com/in/jhondeiberd/" className={classes.root} />
      <BottomNavigationAction icon={<GitHub />} a href="https://www.github.com/jhondeiberd/" className={classes.root} />
    </BottomNavigation>
  );
};
export default Footer;
