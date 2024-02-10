import axios from "axios";
import React, { useEffect, useState } from "react";
import { URL } from "../../constants/codes";
import DataTable from "@/components/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import { Select, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SelectContent } from "@radix-ui/react-select";

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
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(`${URL}/api/v1/admin/projects/`);
        setCount(response.data.projects.length);
        setProcessedData(response.data.projects);
      } catch (error) {
        console.error("Technovation API error: ", error);
      }
    };

    fetchData();
  }, []);

  function handleSearch() {
    const kid = document.querySelector("input").value;
    if (kid === "") {
      alert("Please enter a search term");
    } else {
      const fetchData = async () => {
        try {
          let response = await axios.get(`${URL}/api/v1/admin/projects/${kid}`);
          console.log(response.data);
        } catch (error) {
          console.error("Technovation search error: ", error);
        }
      };

      fetchData();
    }
  }

  const handleOrder = async (value) => {
    if (value === "projectName") {
      try {
        let response = await axios.get(`${URL}/api/v1/admin/projects/`,{ params: { order: "projectName" } });
        setProcessedData(response.data.projects)
      } catch (error) {
        console.error("Technovation sort error: ", error);
      }
    }
    if (value === "kid") {
      try {
        let response = await axios.get(`${URL}/api/v1/admin/projects/`,{ params: { order: "kid" } });
        console.log(response.data);
      } catch (error) {
        console.error("Technovation sort error: ", error);
      }
    }
  }
  return (
    <div>
      <h1>Technovation</h1>
      <p>Total project count: {count}</p>
      <input type="text" placeholder="Search with kid" />
      <Button onClick={handleSearch}>Search</Button>
      <Select onValueChange={handleOrder}>
        <SelectTrigger>
          <SelectValue placeholder="Filter by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="projectName" >Project Name</SelectItem>
          <SelectItem value="kid" >kid</SelectItem>
        </SelectContent>
      </Select>
      <DataTable headers={processedHeaders} data={processedData} />
    </div>
  );
}
