import React, { useEffect, useState } from "react";
import axios from "axios";
import { TextField, Typography, Card, Button, Box } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useNavigate } from "react-router-dom";

export default function TodoList() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const header = { "Access-Control-Allow-Origin": "*" };

  const handleAddTodo = (e) => {
    e.preventDefault();
  
    const accessToken = localStorage.getItem("accessToken");
  
    if (!accessToken) {
      console.error("No access token found. User is not authenticated.");
      return;
    }
  
    axios
      .post(
        "https://friendship-tired-merge-sitting.trycloudflare.com/api/todos/create",
        {
          title, 
          header,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, 
          },
        }
      )
      .then(() => {
        navigate("/listupdate");
      })
      .catch((error) => {
        console.error("Error adding todo:", error.response?.data || error);
      });
  };
  
  


  // const handleAddTodo = async (e) => {
  //   e.preventDefault();
  //   if (!title.trim()) {
  //     alert("Please enter a title before adding a todo!");
  //     return;
  //   }

  //   try {
  //     await axios.get("https://george-divisions-spokesman-lexington.trycloudflare.com/api/todos/create", {
  //       name: title,
  //     });
  //     navigate("/listupdate");
  //   } catch (error) {
  //     console.error("Error adding todo:", error);
  //     alert("Failed to add the todo. Please try again.");
  //   }
  // };

  return (
    <>
      <Card
        sx={{
          width: "100%",
          maxWidth: 600,
          boxShadow: 5,
          padding: 4,
          borderRadius: "20px",
          alignItems: "center",
          marginX: "auto",
          marginTop: "150px",
        }}
      >
        <Typography variant="h3" sx={{ color: "#993300", marginTop: "40px" }}>
          TODO LIST
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", margin: "10px", marginTop: "30px" }}>
          <EditNoteIcon sx={{ color: "#993300" }} />
          <TextField
            label="Enter Title"
            variant="standard"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Box>
        <br />

        <Button
          variant="contained"
          sx={{ bgcolor: "#993300", marginTop: "15px" }}
          onClick={handleAddTodo}
        >
          <ControlPointIcon sx={{ marginRight: 1 }} />
          Add Todo
        </Button>
      </Card>
    </>
  );
}
