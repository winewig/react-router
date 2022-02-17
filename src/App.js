import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Bookkeeper!</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path="2000" element={<div>2000</div>} />
            {/* :invoiceId of the path is a "URL param", meaning it can match any 
          value as long as the pattern is the same */}
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
