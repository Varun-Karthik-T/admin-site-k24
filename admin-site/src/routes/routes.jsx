import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "@/pages/MainPage";
import UserPage from "@/pages/Users";
import TechnovationPage from "@/pages/Technovation";
import RegistrationPage from "@/pages/Registrations";
import ReferralPage from "@/pages/Referrals";
function AdminRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route path="users" element={<UserPage />} />
            <Route path="technovation" element={<TechnovationPage />} />
            <Route path="registrations" element={<RegistrationPage />} />
            <Route path="referrals" element={<ReferralPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default AdminRouter;
