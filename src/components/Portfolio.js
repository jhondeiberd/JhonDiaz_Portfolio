import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Particles from "./Particles";
import project1 from "../images/android.png";
import project2 from "../images/fullstack.jpg";
import project3 from "../images/csharp.jpg";
import project4 from "../images/sql.jpg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "auto",
  },
  cardContainer: {
    maxWidth: "auto",
    margin: "3rem auto",
    marginRight : "4rem",
    marginLeft : "4rem",
  },
}));

const projects = [
  {
    name: "Application personal Budget Android",
    description: `Application developed in Kottlin - Android to manage income, expenses, and personal balance. 
    Allows additional, edit, delete transactions, and is multilingual. for details see the file "Demo.gif"`,
    image: project1,
    code: `https://github.com/jhondeiberd/Android/tree/jhondeiberd/FinalProject`,
    demo:`https://github.com/jhondeiberd/Android/blob/jhondeiberd/FinalProject/Demo.gif`,
  },
  {
    name: "Application full-stack Manager favorite music albums",
    description: `Development of a web application for the user to manage a list of favorites, searching, 
    adding, and deleting. It was built with a back-end server using Node.js + Express for the REST APIs 
    that manage the PostgreSQL database. The front-end server is a React.js that request the user 
    requirements with RESTful APIs for the Discogs Music. My role in this project was developing 
    the Backend part`,
    image: project2,
    code: `https://github.com/jhondeiberd/SoftStructure/tree/jhondeiberd/Final-project`,
    demo:``,
  },
  {
    name: "MVC application for managing contacts",
    description: `Application developed in C# for contact management, a graphical interface that allows 
    you to create new contacts, edit existing ones and delete them, these data are stored in text files. 
    In this project worked. In this project we worked on distributing parts of the menu for the project. 
    In this project, we distributed parts of the menu for the project, and each one coded and tested 
    his part.`,
    image: project3,
    code: `https://github.com/jhondeiberd/C-Sharp-dev/tree/master/Wpf_Managing_Contacts`,
    demo:``,
  },
  {
    name: "Maintain ERP Database",
    description: `I Developed and programed in Transact-SQL to rebuild and reorganize indexes and 
    update statistics, backups to maintain optimal performance of the company's ERP database.`,
    image: project4,
    code: ``,
    demo:``,
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Particles />
      <Grid container justify="center">
        {projects.map((project, i) => (
          <Grid item xs={18} sm={12} md={6} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" a href={project.code}>Code</Button>
                <Button size="small" color="primary" a href={project.demo}>Demo</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
