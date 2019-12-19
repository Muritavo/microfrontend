import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MicroFrontend from "./MicroFrontend";

function App() {
  return (
    <div className="App" style={{ display: "flex", flexDirection: 'column' }}>
      <h1>Esta é uma aplicação React simples</h1>
      <div
        style={{
          flex: 1,
          display: "flex"
        }}
      >
        <div style={{ flex: 1 }}>
          <MicroFrontend host="http://www.google.com.br" />
        </div>
        <div style={{ flex: 1 }}>
          <MicroFrontend host="http://localhost:5001/" />
        </div>
      </div>
    </div>
  );
}

export default App;
