import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <Button onClick={() => navigate("/Events")}>Event filters</Button>
      <Button onClick={() => navigate("/Users")}>Total Users</Button>
      <Button onClick={() => navigate("/Teams")}>Team filters</Button>
      <Button onClick={() => navigate("/Graphs")}>Graphs</Button>
    </>
  );
}
