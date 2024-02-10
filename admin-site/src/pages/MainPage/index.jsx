import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar/Navbar";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <h1>Admin Page</h1>
      <Outlet></Outlet>
    </>
  );
}
