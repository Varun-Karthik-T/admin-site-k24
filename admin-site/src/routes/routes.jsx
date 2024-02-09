import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "@/pages/MainPage";
import UserPage from "@/pages/Users";
import TeamPage from "@/pages/Teams";
import EventPage from "@/pages/Events";
import GraphPage from "@/pages/Graphs";
function AdminRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route path="users" element={<UserPage />} />
            <Route path="teams" element={<TeamPage />} />
            <Route path="events" element={<EventPage />} />
            <Route path="graphs" element={<GraphPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default AdminRouter;
