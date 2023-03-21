import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar/SearchBar";
import NavBar from "./Components/NavBar/NavBar";
import Charts from "./Components/Charts/Charts";
import HomePage from "./Components/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";


function App() {
  const [videoGames, setVideoGames] = useState([]);

  useEffect(() => {
    getAllGames();
  }, []);

  async function getAllGames() {
    let response = await axios.get("http://localhost:8080/all/");
    setVideoGames(response.data);
  }

  return (
    <div>
      <NavBar />
      <div className="main">

      <Routes >
        <Route path="/" element={<HomePage videoGames={videoGames} />} />
        <Route path="/charts" element={<Charts videoGames={videoGames} />} />
        <Route path="/search" element={<SearchBar videoGames={videoGames} />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
