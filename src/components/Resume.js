import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Particles from "./Particles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#13121e",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "3px solid white",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "4px solid blue",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    fontWeight : "bold",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "blue blue transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "blue",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent blue blue",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "blue",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "blue",
    padding: "3rem 0",
    textTransform: "uppercase",
    fontWeight : "bold",
  },
  subHeading: {
    color: "#97978F",
    padding: 0,
    textTransform: "uppercase",
    fontWeight : "bold",
    textAlign : "left",
  },
  body1: {
    color: "#97978F",
    fontWeight : "bold",
    textAlign : "left",
  },
  subtitle1: {
    color: "white",
    textAlign : "justify",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Particles />
      <Typography variant="h4" align="center" className={classes.heading}>
        PROFESSIONAL EXPERIENCES
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2022
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Landscaper
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Boardwalk, Montréal QC, Canada
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Responsible for painting common areas of assigned buildings.
            || Responsible for mowing the lawns around the buildings.
            || Support the maintenance and concierges teams when necessary.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2021
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Applications Manager ERP
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Permoda, Bogotá - Colombia
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Implemented agile methodologies for the execution and follow-up of projects and developments in Dynamics ERP.
            || Supported my team with debugging code in the Dynamics ERP AOT for bug fixes.
            || Developed database queries for incident resolution and analysis.
            || Collaborated with product managers and third parties to identify and resolve issues coordinated system requirements, and created project schedules.
            || Planned and executed annual budget for ERP improvement.
            || Planned, implemented and supervised IT technology solutions to ensure satisfactory fulfillment of end-user requirements, implementation and support in a productive environment.
            || Coordinated the development of virtual training material for the users’ application
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2017
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Applications Professional ERP
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Permoda, Bogotá - Colombia
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Escalated problems to the Technical Specialist Level third or above within the support structure.
            || Led the definition and formation of plans for applications aimed to master users’ knowledge.
            || Performed test runs for approval and implementation of developments in a production environment.
            || Enhanced and maintained ERP functionalities and execute upcoming projects.
            || Implemented and deployed ERP's standard modules and local functionalities.
            || Optimized processes and procedures in the ERP
            || Developed virtual training material amended to extend the ERP modules.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2008
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Production Planning Analyst
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Permoda, Bogotá - Colombia
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
          Implemented Material Requirements Planning (MRP) methodology for product production
          || Designed and configured technical sheets and spreadsheets for clothing products.
          || Calculated the manufacturing route and the cost of the bill of materials for the garments.
          || Applied engineering industrialization methods and plans to improve the manufacturing process to optimize operating costs.
          || Optimized raw material inventories and allocation based on collection designs.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2006
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Production Engineering Analyst
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Permoda, Bogotá - Colombia
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Designed and enhance workload balancing for production plants.
          || Implemented engineering methods and time analysis for the plans' workstations.
          || Prepared operational listings for garments products.
          || Designed and implement standards time for garments operations.
          || Identified and improved bottlenecks for production modules.
          || Prepared efficiency reports and control the unproductive time of the plant.
          </Typography>
        </Box>
        <Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2003
        </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
