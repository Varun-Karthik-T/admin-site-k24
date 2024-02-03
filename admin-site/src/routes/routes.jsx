import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Participants }from "../pages/participants";
import {WorkshopStats} from "../pages/workshopstats";
import {EventStats} from "../pages/eventstats";
import { Navbar } from "../components/navbar";

function AdminRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/workshopstats" element={<WorkshopStats />} />
          <Route path="/eventstats" element={<EventStats />} />
          <Route path="/participants" element={<Participants />} />
          <Route path="/" element={<Navbar/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default AdminRouter;
