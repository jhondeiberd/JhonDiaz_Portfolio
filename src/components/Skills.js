import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Particles from "./Particles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "absolute",
    transform: "translate(-50%)",
    left: "50%",
    textAlign: "center",
  },
  heading: {
    color: "blue",
    padding: "3rem 0",
    textTransform: "uppercase",
    fontWeight : "bold",
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
  lineParagraph: {
    borderBottom: "7px double blue",
    position: "relative",
    clear: "both",
    fontWeight : "bold",
  },
  father: {
    display: "flex",
    justifyContent: "center",
    background: "#13121e",
  },
  son: {
    padding: "10px",
    margin: "10px",
  },
  
}));

const Skills = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.container}>
      <Particles />
      <Typography variant="h4" align="center" className={classes.heading}> TECHNICAL SKILLS </Typography>
      
      <Grid className={classes.father}>
        <Grid className={classes.son}>
          <Typography className={classes.titleParagraph }> Web </Typography>
          <Typography className={classes.lineParagraph}> </Typography>
          <Typography className={classes.paragraph}>
            HTML5<br></br>CSS3<br></br>Node.js<br></br>React<br></br>Web services API
          </Typography>
        </Grid>

        <Grid className={classes.son}>
          <Typography className={classes.titleParagraph }> Programming languages </Typography>
          <Typography className={classes.lineParagraph}> </Typography>
          <Typography className={classes.paragraph}>
            Java<br></br>Python<br></br>GO<br></br>C#<br></br>C++<br></br>PHP<br></br>JavaScript<br></br>Transact-SQL
          </Typography>
        </Grid>

        <Grid className={classes.son}>
          <Typography className={classes.titleParagraph }> Mobile technologies </Typography>
          <Typography className={classes.lineParagraph}> </Typography>
          <Typography className={classes.paragraph}>
            Android<br></br>Kotlin<br></br>Flutter
          </Typography>
        </Grid>

        <Grid className={classes.son}>
          <Typography className={classes.titleParagraph }> Control version</Typography>
          <Typography className={classes.lineParagraph}> </Typography>
          <Typography className={classes.paragraph}>
            GitHub<br></br>Bitbucket
          </Typography>
        </Grid>
      </Grid>

      <Grid className={classes.father}>
        <Grid className={classes.son}>
          <Typography className={classes.titleParagraph }> Project management </Typography>
          <Typography className={classes.lineParagraph}> </Typography>
          <Typography className={classes.paragraph}>
            Scrum<br></br>Kamban<br></br>Trello<br></br>Planner
          </Typography>
        </Grid>

        <Grid className={classes.son}>
          <Typography className={classes.titleParagraph }> Database</Typography>
          <Typography className={classes.lineParagraph}> </Typography>
          <Typography className={classes.paragraph}>
            SQL server<br></br>MySql<br></br>MariaBD<br></br>PostgreSQL
          </Typography>
        </Grid>

        <Grid className={classes.son}>
          <Typography className={classes.titleParagraph }> Business Management Software</Typography>
          <Typography className={classes.lineParagraph}> </Typography>
          <Typography className={classes.paragraph}>
            ERP Microsoft Dynamics<br></br>WMS Arcante<br></br>PLM Porini<br></br>ICG POS
          </Typography>
          </Grid>
        </Grid>
  </Box>
  );
};

export default Skills;
