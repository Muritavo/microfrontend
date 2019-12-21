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
          <MicroFrontend host="http://flutter.microfrontends.net" />
        </div>
        <div style={{ flex: 1, flexDirection: "column", display: "flex" }}>
          <div style={{ flex: 1 }}>
            <MicroFrontend host="http://php.microfrontends.net" />
          </div>
          <div style={{ flex: 1 }}>
            <MicroFrontend host="http://react.microfrontends.net" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
