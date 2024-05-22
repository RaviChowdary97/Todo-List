import { useEffect, useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import CardUi from "./CardUi";
import { useNavigate } from "react-router-dom";
export const CardList = () => {
  const navigate = useNavigate();
  const [movieList, setMovieList] = useState([]);
  const [filter, setFilter] = useState("All");

  const filteredMovies = movieList.filter(
    (movie) =>
      filter === "All" || movie.Status.toLowerCase() === filter.toLowerCase()
  );

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
    if (window.confirm("Are you sure you want to delete this Todo?")) {
      const res = await fetch(
        `https://65decd10ff5e305f32a07c1f.mockapi.io/Card/${id}`,
        { method: "DELETE" }
      );
      const data = await res.json();
      console.log(data);
      getMovies();
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginRight: "30px",
          marginLeft: "30px",
        }}
      >
        <h2>My TODO's</h2>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="status-filter-label">Status Filter</InputLabel>
          <Select
            labelId="status-filter-label"
            id="status-filter"
            value={filter}
            label="Filter by Status"
            onChange={(e) => setFilter(e.target.value)}
            size="small"
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Not Completed">Not Completed</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2%",
          marginLeft: "30px",
          marginRight: "30px",
        }}
      >
        {filteredMovies.map((element) => (
          <CardUi
            key={element.id}
            {...element}
            id={element.id}
            deleteButton={
              <IconButton
                aria-label="delete"
                onClick={() => deleteMovie(element.id)}
              >
                <DeleteForeverIcon />
              </IconButton>
            }
            editButton={
              <IconButton
                aria-label="edit"
                onClick={() => navigate(`/edit/${element.id}`)}
              >
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
};
