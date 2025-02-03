import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography, Card, Button } from "@mui/material";
import { Link } from "react-router-dom";



export default function ListUpdate() {
  const [data, setData] = useState([]);


  async function getData() {
    console.log("Fetching data...");

    try {
      const accessToken = localStorage.getItem("accessToken");
      console.log("USER TOKEN:", accessToken);

      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      const response = await axios.get(
        "https://friendship-tired-merge-sitting.trycloudflare.com/api/todos/get",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.response?.data || error.message);
    }
  }

  async function handleDelete(todoId) {
    console.log("Deleting item:", todoId);

    try {
      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      if (!todoId) {
        console.error("Todo ID is required for deletion");
        return;
      }

      const response = await axios.delete(
        `https://friendship-tired-merge-sitting.trycloudflare.com/api/todos/delete/${todoId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(`Todo with ID ${todoId} deleted successfully`, response.data);
      getData(); 
    } catch (error) {
      console.error("Error deleting todo:", error.response?.data || error.message);
    }
  }

  const setToLocalStorage = (id, title) => {
    localStorage.setItem("todoId", id);
    localStorage.setItem("title", title);
  };


  useEffect(() => {
    getData();
  }, []);

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 600,
        boxShadow: 5,
        padding: 4,
        borderRadius: "20px",
        mx: "auto",
        mt: 5,
        textAlign: "center",
      }}
    >
      <Typography variant="h3" sx={{ color: "#993300", mt: "40px" }}>
        TODO LIST
      </Typography>
      <br />
      <hr />
      <table style={{ width: "100%" }}>
        <colgroup>
          <col style={{ width: "20%" }} />
          <col style={{ width: "40%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "20%" }} />
        </colgroup>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachData) => (
            <tr key={eachData.id}>
              <td>{eachData.id}</td>
              <td>{eachData.title}</td>
              <td>
                <Link to="/todoupdate">
                  <Button
                    variant="contained"
                    sx={{ color: "#fff", backgroundColor: "#993300" }}
                    onClick={() => setToLocalStorage(eachData.id, eachData.title)}
                  >
                    Edit
                  </Button>
                </Link>
              </td>
              <td>
                <Button
                  variant="outlined"
                  sx={{ color: "#993300", borderColor: "#993300" }}
                  onClick={() => handleDelete(eachData.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/todolist">
        <Button
          variant="outlined"
          sx={{ color: "#993300", borderColor: "#993300", mt: "20px" }}
        >
          Back
        </Button>
      </Link>
    </Card>
  );
}
