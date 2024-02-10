import DataTable from "@/components/DataTable/DataTable";
import React, { useState } from "react";
import { headers } from "@/constants/codes";

export default function EventsPage() {
  const [data, setData] = useState([
    {
      event: "Robo wars",
      team: "binary potatoes",
      cost: 999,
      college: "IIT Bombay",
      paymentStatus: "Paid",
      date: "2021-09-12",
    },
    {
      event: "Code fest",
      team: "hexagonal donuts",
      cost: 799,
      college: "IIT Delhi",
      paymentStatus: "Unpaid",
      date: "2021-10-15",
    },
    {
      event: "Hackathon",
      team: "quantum bits",
      cost: 1299,
      college: "IIT Madras",
      paymentStatus: "Paid",
      date: "2021-11-20",
    },
    {
      event: "AI challenge",
      team: "neural networks",
      cost: 1499,
      college: "IIT Kanpur",
      paymentStatus: "Unpaid",
      date: "2021-12-05",
    },
  ]);
  return (
    <div>
      <h1>Events</h1>
      <DataTable headers={headers} data={data} />
    </div>
  );
}
