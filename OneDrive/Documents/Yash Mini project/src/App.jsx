import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RoutesManagement from "./pages/RoutesManagement";
import SchoolPortal from "./pages/SchoolPortal";
import FleetManagement from "./pages/FleetManagement";
import StudentsManagement from "./pages/StudentsManagement";
import Analytics from "./pages/Analytics";
import AccessPortal from "./pages/AccessPortal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home Page 🚀</h1>} />
        <Route path="/RoutesManagement" element={<RoutesManagement />} />
        <Route path="/FleetManagement" element={<FleetManagement />} />
        <Route path="/StudentsManagement" element={<StudentsManagement />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/SchoolPortal" element={<SchoolPortal />} />
        <Route path="/AccessPortal" element={<AccessPortal />} />
      </Routes>
    </Router>
  );
}

export default App;