import Home from "./pages/Home";
import LiveTracking from "./pages/LiveTracking";
import AdminDashboard from "./pages/AdminDashboard";
import ParentDashboard from "./pages/ParentDashboard";
import DriverView from "./pages/DriverView";
import CityDashboard from "./pages/CityDashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./Layout.jsx";

export const PAGES = {
  Home,
  LiveTracking,
  AdminDashboard,
  ParentDashboard,
  DriverView,
  CityDashboard,
  About,
  Contact,
};

export const pagesConfig = {
  mainPage: "Home",
  Pages: PAGES,
  Layout,
};
