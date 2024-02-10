import DataTable from "@/components/DataTable/DataTable";
import React, { useState } from "react";
import { sampleEventsData } from "@/constants/codes";
import { Button } from "@/components/ui/button";

export default function RegistrationsPage() {
  const [headers, setHeaders] = useState([
    "event",
    "team",
    "cost",
    "college",
    "paymentStatus",
    "date",
  ]);
  const [data, setData] = useState(sampleEventsData);
  const [processedData, setProcessedData] = useState(data);
  const [processedHeaders, setProcessedHeaders] = useState(headers);

  function getEventWiseParticipants(data) {
    const eventCounts = data.reduce((counts, item) => {
      if (!counts[item.event]) {
        counts[item.event] = 0;
      }
      counts[item.event]++;
      return counts;
    }, {});

    setProcessedHeaders(["Event", "Participants Count"]);
    const dataArr = Object.keys(eventCounts).map((event) => ({
      Event: event,
      "Participants Count": eventCounts[event],
    }));
    setProcessedData(dataArr);
  }

  function getPaidTeams(data) {
    const paidTeams = data.filter((item) => item.paymentStatus === "Paid");
    setProcessedData(paidTeams);
    setProcessedHeaders(headers);
  }
  function getUnpaidTeams(data) {
    const paidTeams = data.filter((item) => item.paymentStatus === "Unpaid");
    setProcessedData(paidTeams);
    setProcessedHeaders(headers);
  }
  function getCEG(data) {
    const CEGTeams = data.filter((item) => item.college === "CEG");
    setProcessedData(CEGTeams);
    setProcessedHeaders(headers);
  }
  function getNotCEG(data) {
    const notCEGTeams = data.filter((item) => item.college != "CEG");
    setProcessedData(notCEGTeams);
    setProcessedHeaders(headers);
  }

  function sortByDateAsc(data) {
    const sortedData = [...data].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    setProcessedData(sortedData);
    setProcessedHeaders(headers);
  }
  function sortByDateDesc(data) {
    const sortedData = [...data].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setProcessedData(sortedData);
    setProcessedHeaders(headers);
  }

  function removeFilters() {
    setProcessedData(data);
    setProcessedHeaders(headers);
  }

  return (
    <div>
      <h1>Registration</h1>
      <Button onClick={() => getEventWiseParticipants(data)}>
        {" "}
        Get count{" "}
      </Button>
      <Button onClick={() => removeFilters()}> Remove filters </Button>
      <Button onClick={() => getPaidTeams(data)}> Get paid teams </Button>
      <Button onClick={() => getUnpaidTeams(data)}> Get unpaid teams </Button>
      <Button onClick={() => getCEG(data)}> Get CEG teams </Button>
      <Button onClick={() => getNotCEG(data)}> Get non-CEG teams </Button>
      <Button onClick={() => sortByDateAsc(data)}> Sort by date Asc </Button>
      <Button onClick={() => sortByDateDesc(data)}> Sort by date Desc </Button>
      <DataTable headers={processedHeaders} data={processedData} />
    </div>
  );
}
