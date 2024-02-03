/* eslint-disable no-unused-vars */
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Navbar } from "@/components/navbar"
import { workshopCodes } from "../Constants/codes";


function WorkshopStats() {
    //api call to get no of registrations
    let count = {
        GENERATIVEAI: 0,
        ETHICALHACKING: 0,
        IOTUNLEASED: 90,
        BIMUSINGREVIT: 0,
        BRAINWAVEROBO: 0,
        '3DANIMATION': 0,
        FULLSTACKDEV: 0,
        DATASCIENCE: 0,
        SIXTHSENSEROBO: 0,
        DESIGNTHINKING: 90
    }

    const createTableRow = (code) => {
        return (
            <TableRow>
                <TableCell>{workshopCodes[code].name}</TableCell>
                <TableCell>{count[code]}</TableCell>
            </TableRow>
        );
    };



    return (
        <div>
            <Navbar />
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Workshop</TableHead>
                        <TableHead>Registrations</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Object.keys(workshopCodes).map((code) => createTableRow(code))}
                </TableBody>
            </Table>
            

        </div>
    );
}

export { WorkshopStats };
