import axios from "axios";
import React, { useEffect, useState } from "react";
import { URL } from "../../constants/codes";
import DataTable from "@/components/DataTable/DataTable";

export default function TechnovationPage() {
  const [headers, setHeaders] = useState([
    "projectName",
    "driveLink",
    "dependent",
    "abstractPDFLink",
  ]);
  const [data, setData] = useState([]);
  const [processedData, setProcessedData] = useState(data);
  const [processedHeaders, setProcessedHeaders] = useState(headers);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL}/api/v1/admin/projects/`);
        console.log(response.data);
        setProcessedData(response.data.projects);
      } catch (error) {
        console.error("Technovation API error: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>Technovation</h1>
      <DataTable headers={processedHeaders} data={processedData} />
    </div>
  );
}
