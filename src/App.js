import React from "react";
import logo from "./logo.svg";
import SearchMovies from "./components/search/SearchMovies";

function App() {
  return (
    <div className="container">
      <h1 className="title">Movie search</h1>

      <SearchMovies />
    </div>
  );
}

export default App;
