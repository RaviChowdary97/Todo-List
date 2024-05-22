import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function EditCard() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    getSingleMovie();
  }, []);

  const getSingleMovie = async () => {
    const data = await fetch(
      `https://65decd10ff5e305f32a07c1f.mockapi.io/Card/${id}`
    );
    const res = await data.json();
    // console.log(res)
    setMovie(res);
  };

  return <>{movie ? <EditMovieForm movie={movie} /> : "Loading...."}</>;
}

//another component
const EditMovieForm = ({ movie }) => {
  const navigate = useNavigate();
  const [Name, setName] = useState(movie.Name);
  const [Descrption, setDescrption] = useState(movie.Descrption);
  const [Status, setStatus] = useState(movie.Status);

  // update on baisis id
  const updateMovie = (id) => {
    const movie = {
      Name: Name,
      Descrption: Descrption,
      Status: Status,
    };
    console.log(movie);
    updateMoviesdata(movie, id);
    alert("card updated successfully");
    navigate(-1);
  };
  const updateMoviesdata = async (movie, id) => {
    const data = await fetch(
      `https://65decd10ff5e305f32a07c1f.mockapi.io/Card/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await data.json();
    console.log(res);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <TextField
          sx={{
            width: "50%",
            margin: "1% 25% 1% 25%",
          }}
          id="filled-basic"
          label="MovieName"
          variant="filled"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          sx={{
            width: "50%",
            margin: "1% 25% 1% 25%",
          }}
          id="filled-basic"
          label="PosterURL"
          variant="filled"
          value={Descrption}
          onChange={(e) => setDescrption(e.target.value)}
        />

        <TextField
          sx={{
            width: "50%",
            margin: "1% 25% 1% 25%",
          }}
          id="filled-basic"
          label="Rating"
          variant="filled"
          value={Status}
          onChange={(e) => {
            setStatus(e.target.value);
            console.log("Status changed:", e.target.value);
          }}
        />

        <Button
          sx={{
            width: "15%",
            margin: "1% 1% 1% 38%",
          }}
          variant="contained"
          onClick={() => updateMovie(movie.id)}
        >
          Update Card
        </Button>
        <Button
          sx={{
            width: "10%",
          }}
          variant="contained"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </Box>
    </>
  );
};
