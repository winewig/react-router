import { useState, useEffect } from "react";

export function useCheckWindowSize() {
  const [mobileWindow, setmobileWindow] = useState(checkMobileWindow);
  useEffect(() => {
    window.addEventListener("resize", updateMobileWindow);
    return () => window.removeEventListener("resize", updateMobileWindow);
  });

  return mobileWindow;

  function checkMobileWindow() {
    return window.innerWidth < 666;
  }

  function updateMobileWindow() {
    setmobileWindow(checkMobileWindow);
  }
}
