import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Bookkeeper!</h1>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <div className="nav-link">
          <Link to="/invoices">Invoices</Link>
        </div>
        <div className="nav-link">
          <Link to="/expenses">Expenses</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
