import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export const AddCard = () => {
  const [Name, setName] = useState("");
  const [Descrption, setDescrption] = useState("");
  const [Status, setStatus] = useState("Not Completed");

  useEffect(() => {
    setStatus("Not Completed");
  }, []);

  const addCard = () => {
    if (!Name.trim() || !Descrption.trim()) {
      alert("Name and Description are needed");
      return;
    }
    const card = {
      Name: Name,
      Descrption: Descrption,
      Status: Status,
    };
    console.log(card);
    postCard(card);
  };

  const postCard = async (card) => {
    const data = await fetch(
      "https://65decd10ff5e305f32a07c1f.mockapi.io/Card",
      {
        method: "POST",
        body: JSON.stringify(card),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await data.json();
    console.log(res);
  };

  return (
    <Box sx={{ width: "100%", margin: "0px 0px 10px 40px" }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={4}>
          <TextField
            fullWidth
            id="filled-basic"
            label="Name"
            variant="filled"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            id="filled-basic"
            label="Descrption"
            variant="filled"
            value={Descrption}
            onChange={(e) => setDescrption(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            onClick={() => addCard()}
            sx={{ width: "100%" }}
          >
            Add TODO
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
