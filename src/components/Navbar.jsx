import * as React from "react";
// import "./Nav.css";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            color: "#fff",
            bgcolor: "#993300",
          }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" paddingLeft={"200px"}>
              TODO
              <span
                style={{
                  color: "#288A84",
                  fontStyle: "italic",
                  variant: "h3",
                }}
              >
                LIST
              </span>
            </Typography>
            <Typography sx={{ paddingLeft: "700px" , color : "#fff"}}>
              <Link to="/signup" style={{ textDecoration: "none" , color : "#fff"}}>
                <Button color="inherit" variant="outlined">
                  Sign up
                </Button>
              </Link>
              &nbsp;
              <Link to="/login" style={{ textDecoration: "none", color : "#fff" }}>
                <Button sx={{ marginLeft: "100px" }} color="inherit" variant="outlined">
                  Log in
                </Button>
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
