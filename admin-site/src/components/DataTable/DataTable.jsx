import React from "react";
import { Table, TableHeader, TableHead, TableRow, TableCell, TableBody } from "../ui/table";

export default function DataTable({ data, headers }) {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            {headers.map((header, index) => (
              <TableHead key={index}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((data, index) => (
            <TableRow key={index}>
                <TableCell>summa</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
