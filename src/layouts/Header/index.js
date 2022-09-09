import React from "react";
import "./styles.css";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { Link } from "react-router-dom";
import { Box, Button, Modal, Typography } from "@mui/material";

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

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="headerContainer navbar">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <a href="https://dev.to/nawazmujawar">Blogs</a>
        <a href="https://drive.google.com/file/d/1PlkxVknhlnJCtQkdt3YhRH6i56sz-hrK/view">
          Resume
        </a>
        {/* <a href="/contact">Contact</a> */}
        <span onClick={handleOpen} className="contactBtn">
          Contact
        </span>
      </nav>

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

export default Header;
