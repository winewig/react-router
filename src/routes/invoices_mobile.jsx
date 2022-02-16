import React from "react";
import { Outlet } from "react-router-dom";
import "./invoices.css";

export default function InvoicesMobile() {
  return (
    <div style={{ display: "flex" }}>
      <Outlet />
    </div>
  );
}
