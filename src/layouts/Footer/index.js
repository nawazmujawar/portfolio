import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const NAVLINK = [
  { path: "/", title: "Home" },
  { path: "https://dev.to/nawazmujawar", title: "Blogs" },
];
const SOCIALMEDIA = [
  { path: "https://www.linkedin.com/in/nawazmujawar/", title: "Linked In" },
  { path: "https://github.com/nawazmujawar", title: "Github" },
  { path: "", title: "Twitter" },
];

const LASTCOLUMN = [
  {
    path: "https://drive.google.com/file/d/1PlkxVknhlnJCtQkdt3YhRH6i56sz-hrK/view",
    title: "Resume",
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Footer = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="footerContainer">
      <div className="links">
        {NAVLINK.map((link, i) => (
          <a href={link.path}>{link.title}</a>
        ))}
      </div>
      <div className="links">
        {SOCIALMEDIA.map((link, i) => (
          <a href={link.path}>{link.title}</a>
        ))}
      </div>
      <div className="links">
        {LASTCOLUMN.map((link, i) => (
          <a href={link.path}>{link.title}</a>
        ))}
        <span onClick={handleOpen} style={{ color: "rgb(132, 140, 146)" }}>
          Contact
        </span>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Mail :
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = "mailto:nawazmujawar@hotmail.com";
                e.preventDefault();
              }}
            >
              nawazmujawar@hotmail.com
            </Link>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Footer;
