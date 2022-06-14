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
    textTransform: "uppercase",
    fontWeight : "bold",
  },
  title: {
    color: "#4f94d4",
    fontWeight : "bold",
    textAlign: "left",
  },
  lineParagraph: {
    borderBottom: "7px double blue",
    position: "relative",
    clear: "both",
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

const Education = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.container}>
      <Particles />
      <Typography variant="h4" align="center" className={classes.heading}> TRAINING AND CERTIFICATIONS </Typography><br></br>
      <Typography variant="h4" align="left" className={classes.heading}> TRAINING</Typography>
      <Typography className={classes.lineParagraph}> </Typography>
      <Grid className={classes.father}>
      <Grid className={classes.son}>
        <Typography variant="h6" className={classes.titleParagraph }> Programmation et Technologies Web </Typography>
        <Typography className={classes.title }> Institut supérieur d’informatique ISI</Typography>
        <Typography className={classes.title }> Montreal, Canada</Typography>
        <Typography className={classes.paragraph}> Attestation of College Studies</Typography>
        <Typography className={classes.paragraph}> 2021 - Present </Typography><br></br>
        </Grid>

        <Grid className={classes.son}>
        <Typography variant="h6" className={classes.titleParagraph }> Production engineer </Typography>
        <Typography className={classes.title }> Universidad Distrital Francisco José de Caldas</Typography>
        <Typography className={classes.title }> Bogotá - Colombia </Typography>
        <Typography className={classes.paragraph}> Bachelor's Degree</Typography>
        <Typography className={classes.paragraph}> 2008 - 2013 </Typography><br></br>
        </Grid>

      <Grid className={classes.son}>
        <Typography variant="h6" className={classes.titleParagraph }> Industrial technology </Typography>
        <Typography className={classes.title }> Fundación Cidca</Typography>
        <Typography className={classes.title }> Bogotá - Colombia </Typography>
        <Typography className={classes.paragraph}> Diploma of Vocational Studies</Typography>
        <Typography className={classes.paragraph}> 2002 - 2005 </Typography><br></br>
        </Grid>
      </Grid><br></br>

      <Typography variant="h4" align="left" className={classes.heading}> CERTIFICATIONS</Typography>
      <Typography className={classes.lineParagraph}> </Typography>
      <Grid className={classes.father}>
      <Grid className={classes.son}>
        <Typography variant="h6" className={classes.titleParagraph }> Object-oriented programming paradigm </Typography>
        <Typography className={classes.title }> Fundación Carlos Slim - Online</Typography>
        <Typography className={classes.paragraph }> 2021</Typography><br></br>
        </Grid>

        <Grid className={classes.son}>
        <Typography variant="h6" className={classes.titleParagraph }> Analyzing and Visualizing Data with Microsoft Power BI </Typography>
        <Typography className={classes.title }> Lourtec - Online</Typography>
        <Typography className={classes.paragraph }> Microsoft Certified Solutions Associate (MCSA) - 2020</Typography><br></br>
        </Grid>

      <Grid className={classes.son}>
      <Typography variant="h6" className={classes.titleParagraph }> SQL 2016 Database Development </Typography>
        <Typography className={classes.title }> Lourtec - Online</Typography>
        <Typography className={classes.paragraph }> Microsoft Certified Solutions Associate (MCSA) - 2020</Typography><br></br>
        </Grid>
      </Grid>

      <Grid className={classes.father}>
      <Grid className={classes.son}>
        <Typography variant="h6" className={classes.titleParagraph }> Developing C# - ASP.NET Core MVC </Typography>
        <Typography className={classes.title }> Lourtec - Online</Typography>
        <Typography className={classes.paragraph }> Microsoft Certified Solutions Associate (MCSA) - 2019</Typography><br></br>
        </Grid>

        <Grid className={classes.son}>
        <Typography variant="h6" className={classes.titleParagraph }> Database Administrator (DBA) </Typography>
        <Typography className={classes.title }> Fundación Carlos Slim - Online</Typography>
        <Typography className={classes.paragraph }> 2018</Typography><br></br>
        </Grid>
      </Grid>
  </Box>
  );
};

export default Education;
