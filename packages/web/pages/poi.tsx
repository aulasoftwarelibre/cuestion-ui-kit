import { NextPage } from "next";
import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Avatar, Paper, Toolbar, Typography, Grid, List, ListSubheader, ListItem, ListItemText, ListItemIcon, ListItemSecondaryAction, Button, Chip, IconButton } from "@material-ui/core";

import BottomMenu from "../components/BottomMenu";
import { Session } from "@cuestion/ui";
import { LocationOn } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    content: {
      height: "100vh",
      width: "100%",
      overflow: "auto",
      paddingTop: "80px",
    },
    paper: {
      margin: "0 10px 10px",
      padding: theme.spacing(5, 2),
    },
    list: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      paddingTop: "80px"
    },
    container: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      flexWrap: "wrap",
      marginBottom: "15%"
    }, 
    grid: {
      padding: theme.spacing(0),
    }
  }),
);

interface Props {
  session: Session,
  poi
}

const PoiPage: NextPage<Props> = ({ session, poi }) => {
  const classes = useStyles({}); 

  const mapsSelector = (location) => {
    if ((navigator.platform.indexOf("iPhone") != -1) || 
     (navigator.platform.indexOf("iPad") != -1) || 
     (navigator.platform.indexOf("iPod") != -1)) {
      window.open(location);
     } else { 
      window.open(location);
     }
  }
  
  return (
    <>
    <AppBar color="primary" position="absolute">
        <Toolbar>
          <Avatar src={session.logo} style={{ marginRight: "5px" }} />
          <Typography component="h1" variant="h6" color="inherit" noWrap>
            {session.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>
      <List subheader={<ListSubheader>Congreso</ListSubheader>} className={classes.list}>
        {poi.conference.map(point =>(
            <ListItem>
              <ListItemText id={point.id} primary={point.title} secondary={point.description}/>
              <ListItemSecondaryAction>
                <IconButton onClick={() => mapsSelector(point.url)}>
                  <LocationOn/>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
        ))}
      </List>
      <List subheader={<ListSubheader>Desayuno</ListSubheader>} className={classes.list}>
        {poi.breakfast.map(point =>(
              <ListItem>
                <ListItemText id={point.id} primary={point.title} secondary={point.description}/>
                <ListItemSecondaryAction>
                  <IconButton onClick={() => mapsSelector(point.url)}>
                    <LocationOn/>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
        ))}
      </List>
      <List subheader={<ListSubheader>Almuerzo</ListSubheader>} className={classes.list}>
        {poi.lunch.map(point =>(
            <ListItem>
              <ListItemText id={point.id} primary={point.title} secondary={point.description}/>
              <ListItemSecondaryAction>
                <IconButton onClick={() => mapsSelector(point.url)}>
                  <LocationOn/>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
        ))}
      </List>
      </div>
      <BottomMenu value={"poi"} />
    </>
  );
};

PoiPage.getInitialProps = async ({ query }) => {
  const code = "1234";

  const sessionRequest = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/sessions/${encodeURIComponent(
      code,
    )}/code`,
  );
  const session = await sessionRequest.json();

  const poiRequest = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/sessions/${encodeURIComponent(
      code,
    )}/poi`,
  );

  const poi = await poiRequest.json();

  return { session, poi };
};

export default PoiPage;
