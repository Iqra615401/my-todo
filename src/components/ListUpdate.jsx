import React from 'react'
import { TextField, Typography , Card , Button , Box } from '@mui/material'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import EditNoteIcon from '@mui/icons-material/EditNote';

export default function ListUpdate() {
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
          mt: "50px",
        }}
      >
        <Typography variant="h3" sx={{ color: "#993300", mt: "40px" }}>
          TODO  LIST
        </Typography>


        <Box
          sx={{ display: "flex", alignItems: "center", m: "10px", mt: "30px" , pt: "30px"}}
        >
          <EditNoteIcon sx={{ color: "#993300" }} />
          &nbsp; &nbsp;
          <TextField
            label=""
            variant="standard"
            name="Enter Title"
            type="Enter Title"
            fullWidth
          />
        </Box>
<br/>

         <Button
          variant="contained"
          sx={{ bgcolor: "#993300", my: "10px" }}
          // onClick={habdleSubmit}
        >
          <ControlPointIcon  variant="contained" sx={{ mr: 1 }} />
          Add Todo
        </Button>








        <Card
        sx={{
          width: "100%",
          maxWidth: 540,
          boxShadow: 5,
          padding: 4,
          borderRadius: "20px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{mt: "30px" }}
        >
          <TextField
            label=""
            variant="standard"
            name="Enter Title"
            type="Enter Title"
          />
         <Button
          variant="contained"
          sx={{ bgcolor: "#993300", mt: "15px" , ml: "40px"}}
          // onClick={habdleSubmit}
        >
          Update
        </Button>
        </Box>
        <Box
          sx={{ mt: "30px" }}
        >
          <TextField
            label=""
            variant="standard"
            name="Enter Title"
            type="Enter Title"
          />
         <Button
          variant="contained"
          sx={{ bgcolor: "#993300", mt: "15px" , ml: "40px"}}
          // onClick={habdleSubmit}
        >
          Delete
        </Button>
        </Box>
         </Card>

         </Card>
    </>
  )
}
