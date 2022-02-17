import React from "react";
import { Link, Outlet, useRoutes } from "react-router-dom";

import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import "./App.css";

function App() {
  let routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/invoices",
          element: <Invoices />,
          children: [
            {
              index: true,
              element: (
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              ),
            },
            {
              path: "/invoices/2000",
              element: <div>2000</div>,
            },
            {
              path: "/invoices/:invoiceId",
              element: <Invoice />,
            },
          ],
        },
        {
          path: "expenses",
          element: <Expenses />,
        },
        {
          path: "*",
          element: (
            <div style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <div className="App">
      <h1>Bookkeeper!</h1>
      {useRoutes(routes)}
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
