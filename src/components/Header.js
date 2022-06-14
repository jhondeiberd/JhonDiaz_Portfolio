import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../Profile.jpg";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";
import Email from "@material-ui/icons/Email";
import Directions from "@material-ui/icons/Directions";
import Phone from "@material-ui/icons/Phone";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin: theme.spacing(1),
  },
  title: {
    color: "#4f94d4",
    fontWeight : "bold",
  },

  subtitle: {
    color: "white",
    textTransform: "uppercase",
    fontWeight : "bold",
  },

  titleParagraph: {
    color: "white",
    textTransform: "uppercase",
    fontWeight : "bold",
    textAlign: "left",
  },
  
  paragraph: {
    color: "white",
    textAlign: "justify",
    padding: "2rem",
  },

  typedContainer: {
    left: "50%",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },

  container: {
    position: "absolute",
    transform: "translate(-50%)",
    left: "50%",
    textAlign: "center",
  },

  bottomNavContainer: {
    background: "#4f94d4",
    width : "auto",
    fontWeight : "bold",
    position: "relative",
    margin: "1rem 10% 1rem 10%",
    color: "white",
    alignContent : "center",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "white",
      "&:hover": {
        fill: "navy",
        fontSize: "1.5rem",
      },
    },
  },

  lineParagraph: {
    borderBottom: "7px double blue",
    position: "relative",
    clear: "both",
    fontWeight : "bold",
  },
  father: {
    display: "flex",
    justifyContent: "center",
  },
  son: {
    padding: "10px",
    margin: "10px",
  },
  
  barraTempEn: {
    height: "110px",
    width: "110px",
    background : "blue",
    margin: "auto",
    borderRadius : "50%",
    overflow : "hidden",
    transform : "rotate(130deg)",
  },
  barraTempFr: {
    height: "110px",
    width: "110px",
    background : "blue",
    margin: "auto",
    borderRadius : "50%",
    overflow : "hidden",
    transform : "rotate(45deg)",
  },
  barraTempSp: {
    height: "110px",
    width: "110px",
    background : "blue",
    margin: "auto",
    borderRadius : "180%",
    overflow : "hidden",
    transform : "rotate(180deg)",
  },
  barra1: {
    height: "55px",
    width: "110px",
    background : "blue",
    margin: "auto",
  },
  barra2: {
    height: "55px",
    width: "110px",
    background : "grey",
    margin: "auto",
  },
  circleCenter: {
    height: "70px",
    width: "70px",
    background : "#13121e",
    borderRadius : "50%",
    position : "relative",
    margin : "-90px auto 50px",
  },
  rectangle: {
    width: "280px",
    height: "50px",
    background : "gray",
    position : "relative",
    margin : "-50px auto 10px",
    color: "white",
    fontWeight : "bold",
  }

}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["JHON DEIBER DIAZ PARRA"]} typeSpeed={80} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Junior Software development",
            "Back-end Developer",
            "Front-End Developer",
            "Full stack Developer",
            "Application Manager ERP",
          ]}
          typeSpeed={100}
          backSpeed={30}
          loop
        />
      </Typography>
      
      <BottomNavigation className={classes.bottomNavContainer}>
        <BottomNavigationAction icon={<Email/>} className={classes.root} />
        <Typography> <h3>jhondeiberd@gmail.com</h3> </Typography>
        <BottomNavigationAction icon={<Directions/>} className={classes.root} />
        <Typography> <h3>"Montréal QC, Canada"</h3> </Typography>
        <BottomNavigationAction icon={<Phone/>} className={classes.root} />
        <Typography> <h3>(514)-3461672</h3> </Typography>
        <BottomNavigationAction icon={<LinkedIn />} a href="https://www.linkedin.com/in/jhondeiberd/" className={classes.root} />
        <BottomNavigationAction icon={<GitHub />} a href="https://www.github.com/jhondeiberd/" className={classes.root} />
      </BottomNavigation>
     
      <Grid className={classes.container}>
      <Typography className={classes.titleParagraph }> About Me </Typography>
      <Typography className={classes.lineParagraph}> </Typography>
      <Typography className={classes.paragraph}>
        I am a creative person in problem solving and analytical thinking. During my studies, 
        I have learned different technologies and programming languages, I am passionate about learning, 
        teamwork and I want to get a great experience as a programmer and thus be able to contribute to the needs of companies and their customers. 
        Throughout my career, I have been involved in large-scale complex projects, reengineering of functionalities and interfaces. 
        I believe that innovation and continuous improvement is a success factors for organizations, 
        so I tirelessly insist on applying these criteria in every initiative in which I have participated.
      </Typography>
      <Typography className={classes.titleParagraph }> Languages </Typography>
      <Typography className={classes.lineParagraph}> </Typography><br></br>
      
      <Grid className={classes.father}>
        <Grid className={classes.son}>
          <div className={classes.barraTempEn}>
            <div className={classes.barra1}></div>
            <div className={classes.barra2}></div>
            <div className={classes.circleCenter}></div>
          </div>
          <div ClassName={classes.barraTemp}>
            <div className={classes.rectangle}><h3>English <br></br>Professional working proficiency</h3></div>
          </div>
        </Grid>

        <Grid className={classes.son}>
          <div className={classes.barraTempFr}>
            <div className={classes.barra1}></div>
            <div className={classes.barra2}></div>
            <div className={classes.circleCenter}></div>
          </div>
          <div ClassName={classes.barraTemp}>
            <div className={classes.rectangle}><h3>French <br></br>Elementary proficiency</h3></div>
          </div>
        </Grid>

        <Grid className={classes.son}>
          <div className={classes.barraTempSp}>
            <div className={classes.barra2}></div>
            <div className={classes.barra2}></div>
            <div className={classes.circleCenter}></div>
          </div>
          <div ClassName={classes.barraTemp}>
            <div className={classes.rectangle}><h3>Spanish <br></br>Native or bilingual proficiency</h3></div>
          </div>
          </Grid>
        </Grid>
      </Grid>      
    </Box>
  );
};

export default Header;
