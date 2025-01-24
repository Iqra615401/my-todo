import React, { useState } from "react";
import axios from "axios";
import { Button, Box, Card, TextField, Typography, InputAdornment, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [labelData, setLabelData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const { data } = await axios.post(
        `  https://workstation-arts-dear-divx.trycloudflare.com/api/users/signup`,
        labelData
      );
      console.log("data--", data);
      alert(data.message || "Sign up successfully");
      navigate("/login");
    } catch (error) {
      alert(
        error.response?.data?.details || "Something went wrong. Please try again."
      );
      console.error(
        error.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  };

  const handleData = (e) => {
    setLabelData({ ...labelData, [e.target.name]: e.target.value });
  };

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 600,
        boxShadow: 5,
        padding: 4,
        borderRadius: "20px",
        alignItems: "center",
        marginX: "auto",
        mt: "150px",
      }}
    >
      <Typography variant="h3" sx={{ color: "#993300", mb: 4 }}>
        Sign up
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <MailIcon sx={{ color: "#993300", mr: 2 }} />
        <TextField
          label="Email"
          variant="standard"
          value={labelData.email}
          name="email"
          type="email"
          fullWidth
          onChange={handleData}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
        <LockIcon sx={{ color: "#993300", mr: 2 }} />
        <TextField
          label="Password"
          variant="standard"
          value={labelData.password}
          name="password"
          type={showPassword ? "text" : "password"}
          fullWidth
          onChange={handleData}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Button
        variant="contained"
        sx={{ bgcolor: "#993300", color: "white" }}
        onClick={handleSubmit}
      >
        Sign Up
      </Button>
    </Card>
  );
}
