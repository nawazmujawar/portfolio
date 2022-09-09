import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import React from "react";
import "./styles.css";
import DehazeIcon from "@mui/icons-material/Dehaze";

const MENULIST = [
  { path: "/", title: "Home" },
  { path: "https://dev.to/nawazmujawar", title: "Blogs" },
  {
    path: "https://drive.google.com/file/d/1PlkxVknhlnJCtQkdt3YhRH6i56sz-hrK/view",
    title: "Resume",
  },
];

const CustomDrawer = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {MENULIST.map((menu, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <a href={menu.path} className="menuTitle">{menu.title}</a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <React.Fragment>
      {/* <Button>Left</Button> */}
      <DehazeIcon onClick={toggleDrawer("left", true)} className="drawerBtn" />
      <SwipeableDrawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list("left")}
      </SwipeableDrawer>
    </React.Fragment>
  );
};

export default CustomDrawer;
