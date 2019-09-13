import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Info, LocationOn, Schedule } from "@material-ui/icons";
import { NextPage } from "next";
import Router from "next/router";
import * as React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      width: "100%",
      position: "fixed",
      bottom: 0,
    },
  }),
);

interface Props {
  value: string;
}

const BottomMenu: NextPage<Props> = ({ value }) => {
  const classes = useStyles({});

  return (
    <BottomNavigation value={value} showLabels className={classes.footer}>
      <BottomNavigationAction
        onClick={() => Router.push("/sessions/1234")}
        label="Agenda"
        value="schedule"
        icon={<Schedule />}
      />
      <BottomNavigationAction
        onClick={() => Router.push("/poi")}
        label="POI"
        value="poi"
        icon={<LocationOn />}
      />
      <BottomNavigationAction
        onClick={() => Router.push("/info")}
        label="Info"
        value="info"
        icon={<Info />}
      />
    </BottomNavigation>
  );
};

export default BottomMenu;
