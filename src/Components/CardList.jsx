import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import CardUi from "./CardUi";
import { useNavigate } from "react-router-dom";
export const CardList = () => {
  const navigate = useNavigate();
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    const data = await fetch(
      " https://65decd10ff5e305f32a07c1f.mockapi.io/Card"
    );
    const res = await data.json();
    console.log(res);
    setMovieList(res);
  }
  const deleteMovie = async (id) => {
    console.log(`https://65decd10ff5e305f32a07c1f.mockapi.io/Card/${id}`);
    let res = await fetch(
      `https://65decd10ff5e305f32a07c1f.mockapi.io/Card/${id}`,
      { method: "DELETE" }
    );
    let data = await res.json();
    console.log(data);
    getMovies();
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2%",
        marginLeft: "30px",
      }}
    >
      {movieList.map((element) => (
        <CardUi
          key={element.id}
          {...element}
          id={element.id}
          deleteButton={
            <IconButton
              aria-label="share"
              onClick={() => {
                deleteMovie(element.id);
              }}
            >
              <DeleteForeverIcon />
            </IconButton>
          }
          editButton={
            <IconButton
              aria-label="share"
              onClick={() => {
                navigate(`/edit/${element.id}`);
              }}
            >
              <EditIcon />
            </IconButton>
          }
        />
      ))}
    </div>
  );
};
