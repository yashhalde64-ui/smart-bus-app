import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function NavigationTracker() {
  const location = useLocation();

  useEffect(() => {
    console.log("User navigated to:", location.pathname);
  }, [location]);

  return null;
}