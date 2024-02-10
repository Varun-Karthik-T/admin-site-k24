import React, { useEffect, useState } from "react";
import { BarChart } from "@tremor/react";
import { sampleEventsData } from "@/constants/codes";

function getChartData(data) {
  const chartData = data.reduce((acc, item) => {
    if (!acc[item.event]) {
      acc[item.event] = { name: item.event, CEG: 0, notCEG: 0 };
    }
    if (item.college === "CEG") {
      acc[item.event].CEG++;
    } else {
      acc[item.event].notCEG++;
    }
    return acc;
  }, {});

  return Object.values(chartData);
}

export default function ReferralPage() {

  const [chartdata, setChartData] = useState(getChartData(sampleEventsData));

  useEffect(() => {
    console.log("Data", chartdata);
  }
  , [chartdata]);

  return (
    <div>
      <h1>Graphs</h1>
      <BarChart
        data={chartdata}
        index="name"
        categories={["CEG","notCEG"]}
        yAxisWidth={50}
        colors={["blue", "red"]}
        onValueChange={(v) => console.log(v)}
      />
    </div>
  );
}
