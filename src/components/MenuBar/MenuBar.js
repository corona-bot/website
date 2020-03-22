import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import ShareIcon from "@material-ui/icons/Share";
import HelpIcon from "@material-ui/icons/HelpOutlineRounded";
import Fab from "@material-ui/core/Fab";
import useCookie from "react-use-cookie";

import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0)
  },
  paper: {
    paddingBottom: 50
  },
  list: {
    marginBottom: theme.spacing(2)
  },
  subheader: {
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    top: "auto",
    bottom: 0
  },
  grow: {
    flexGrow: 1
  }
}));

const MenuText = styled.span`
  font-size: 1rem;
  font-weight: bold;
  margin-left: 18px;
`;

const StyledFab = styled(Fab)`
  position: absolute;
  z-index: 50;
  top: -2rem;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const InsetFab = styled.div`
  background: #fafafa;
  position: absolute;
  z-index: 40;
  top: -2.5rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: block;
  width: 5rem;
  height: 5rem;
  border-top: 0;
  border-radius: 5rem;
  // border-bottom-left-radius: 5rem;
  // border-bottom-right-radius: 5rem;
`;

function MenuBar() {
  const [diary, setDiary] = useCookie("has_diary", "false");
  const classes = useStyles();

  useEffect(() => {
    window.addEventListener("fightcovid.diary.activate", () => {
      setDiary("true");
    });
  }, [setDiary]);

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="open drawer">
          <MenuIcon /> <MenuText>Menü</MenuText>
        </IconButton>
        {diary === "true" && (
          <>
            <InsetFab />
            <StyledFab color="secondary" aria-label="add" size="large">
              <AddIcon />
            </StyledFab>
          </>
        )}
        <div className={classes.grow} />
        <IconButton color="inherit">
          <ShareIcon />
        </IconButton>
        <IconButton edge="end" color="inherit">
          <HelpIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

MenuBar.propTypes = {};

export default MenuBar;
