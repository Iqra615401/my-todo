import React, { useState } from 'react'
import axios from 'axios';
import { TextField, Typography , Card , Button , Box } from '@mui/material'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useNavigate } from "react-router-dom";



export default function TodoList() {
  const [title , setTitle] = useState("")
  const navigate = useNavigate();



  const handleAddTodo = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios
      .post("https://fakestoreapi.com/products/1", { name: title })
      .then(() => {
        navigate("/listupdate");
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
      });
};
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
          marginX: "450px",
          mt: "150px",
        }}
      >
        <Typography variant="h3" sx={{ color: "#993300", mt: "40px" }}>
          TODO  LIST
        </Typography>


        <Box
          sx={{ display: "flex", alignItems: "center", m: "10px", mt: "30px" }}
        >
          <EditNoteIcon sx={{ color: "#993300" }} />
          &nbsp; &nbsp;
          <TextField
            label="Enter Title"
            variant="standard"
            name="Enter Title"
            type="Enter Title"
            fullWidth
            onChange={(e) => setTitle(e.target.value)}
          />
        </Box>
<br/>

         <Button
          variant="contained"
          sx={{ bgcolor: "#993300", mt: "15px" }}
          onClick={handleAddTodo}
        >
          <ControlPointIcon  variant="contained" sx={{ mr: 1 }} />
          Add Todo
        </Button>
         </Card>
    </>
  )
}
