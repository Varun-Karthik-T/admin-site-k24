import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <Button onClick={() => navigate("/referrals")}>Referrals</Button>
      <Button onClick={() => navigate("/users")}>Users</Button>
      <Button onClick={() => navigate("/technovation")}>Technovation</Button>
      <Button onClick={() => navigate("/registrations")}>Registrations</Button>
    </>
  );
}
