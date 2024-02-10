import DataTable from "@/components/DataTable/DataTable";
import React, {useState} from "react";

export default function EventsPage() {
  const [data, setData] = useState(["summa", "summa2", "summa3"]);
  return (
    <div>
      <h1>Events</h1>
      <DataTable headers={["Event", "Team", "Cost", "College", "Payment Status"]} data={data} />
    </div>
  );
}
