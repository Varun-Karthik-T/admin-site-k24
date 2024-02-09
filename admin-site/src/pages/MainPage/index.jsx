import React from "react";
import { Outlet } from "react-router-dom";
import Navbar  from "@/components/Navbar/Navbar";
import DataTable from "@/components/DataTable/DataTable";
import { headers } from "@/constants/codes";

export default function MainPage() {

  let data = [
    "summa",
    "summa2",
    "summa3",
  ]

  return (
    <>
      <Navbar />
      <h1>Admin Page</h1>
      <Outlet></Outlet>
      <DataTable headers={headers} data={data} />
    </>
  );
}
