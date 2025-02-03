import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Card, Button, Box, TextField } from "@mui/material";
import axios from "axios";



export default function TodoUpdate() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedTitle = localStorage.getItem("title") || "";
    const storedDescription = localStorage.getItem("description") || "";
    const storedCompleted = localStorage.getItem("completed") === "true";

    setTitle(storedTitle);
    setDescription(storedDescription);
    setCompleted(storedCompleted);
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log("Update clicked");

    try {
      const accessToken = localStorage.getItem("accessToken");
      const todoId = localStorage.getItem("todoId");

      if (!accessToken) {
        console.error("No access token found");
        return;
      }
      if (!todoId) {
        console.error("Todo ID is required for update");
        return;
      }

      await axios.put(
        `https://friendship-tired-merge-sitting.trycloudflare.com/api/todos/update/${todoId}`,
        { title, description, completed },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(`Todo with ID ${todoId} updated successfully`);
      navigate("/listupdate");
    } catch (error) {
      console.error(
        "Error updating todo:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 400,
        boxShadow: 5,
        padding: 4,
        borderRadius: "20px",
        mx: "auto",
        mt: 5,
        textAlign: "center",
      }}
    >
      <Typography variant="h3" sx={{ color: "#993300", mt: "40px" }}>
        Update
      </Typography>
      <br />
      <hr />
      <form onSubmit={handleUpdate}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "10px",
            marginTop: "30px",
          }}
        >
          <TextField
            label=""
            variant="standard"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Box>
        <br />
        <Box sx={{ display: "flex", alignItems: "center", margin: "5px" }}>
          <label>
            <Typography variant="h6" sx={{ color: "#993300" }}>
              Description : &nbsp; &nbsp;
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Typography>
          </label>
        </Box>
        <br />
        <Box sx={{ display: "flex", alignItems: "center", margin: "5px" }}>
          <label>
            <Typography variant="h6" sx={{ color: "#993300" }}>
              Completed : &nbsp; &nbsp;
              <input
                type="checkbox"
                checked={completed}
                onChange={(e) => setCompleted(e.target.checked)}
              />
            </Typography>
          </label>
        </Box>
        <br />

        <Button
          variant="contained"
          sx={{ color: "#fff", backgroundColor: "#993300", mr: "30px" }}
          type="submit"
        >
          Update
        </Button>
        <Button
          variant="outlined"
          sx={{ color: "#993300", borderColor: "#993300", ml: "30px" }}
          type="button"
          onClick={() => navigate("/listupdate")}
        >
          Cancel
        </Button>
      </form>
    </Card>
  );
}
