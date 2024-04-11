import "./App.css";
import { AddCard } from "./Components/AddCard";
import { CardList } from "./Components/CardList";
import EditCard from "./Components/EditCard";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <h2 className="h2">MY TODO</h2>
      <AddCard />
      <br />
      <div className="div">My TODO'S</div>
      <br />
      <br />
      <CardList />
      <Routes>
        <Route path="/edit/:id" element={<EditCard />} />
      </Routes>
    </div>
  );
}

export default App;
