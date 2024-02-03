/* eslint-disable no-unused-vars */
import {
    Table,
    TableCell,
    TableHead,
    TableRow,
} from "@/components/ui/table.jsx";

import { eventCodes } from "../Constants/codes.jsx";
import { Navbar } from "@/components/navbar.jsx";



function EventStats() {

    //api call to get no of registrations
    let count = {
        GENERALREGISTRATION: 0,
        CIVILX: 0,
        BYTEBASH: 0,
        OSPC: 0,
        PACBOT: 0,
        ROWBOATICS: 0,
        ROBORUSH: 0,
        PAPERPRESENTATION: 0,
        ENGINEERINGQUIZ: 0,
        GODSPEED: 0,
        ROBOWARSFIFTEEN: 0,
        ROBOWARSEIGHT: 0,
        SKYSCULPTURE: 0,
        DRONERACING: 0,
        SHERLOCK: 0,
        RIDDLESPHINX: 0
    }

    const createTableRow = (code) => {
        return (
            <TableRow>
                <TableCell>{eventCodes[code].name}</TableCell>
                <TableCell>{count[code]}</TableCell>
            </TableRow>
        );
    };
    

    return (
        <div>
            <Navbar/>
            <p>Event</p>

            <Table>
                <TableRow>
                    <TableHead>Workshop</TableHead>
                    <TableHead>Registrations</TableHead>
                </TableRow>
                {Object.keys(eventCodes).map((code) => createTableRow(code))}
            </Table>

        </div>
    );
}

export { EventStats };
