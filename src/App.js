import React, { useState } from "react";
import Data from "./Data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <div className="container text-center">
        <h1>İsim Filtre</h1>
        <div className="inputContainer">
          <input
            type="text"
            placeholder={searchTerm ? "" : "İsim Giriniz"}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="dataContainer">
          {Data.filter((value) => {
            if (searchTerm === "") {
              return value;
            } else if (
              value.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return value;
            }
          }).map((value) => {
            return (
              <div className="data" key={value.id}>
                <img src={value.image} alt={value.title}></img>
                <h3>{value.title}</h3>
                <p>{value.Description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
