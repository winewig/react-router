import React from "react";
import { useCheckWindowSize } from "../utils/windowSize";

import InvoicesMobile from "./invoices_mobile";
import Invoices from "./invoices";

export default function InvoicesContainer() {
  const mobileWindow = useCheckWindowSize();

  return mobileWindow ? <InvoicesMobile /> : <Invoices />;
}
