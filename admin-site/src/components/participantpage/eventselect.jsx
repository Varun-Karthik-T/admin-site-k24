import React, { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { workshopCodes, eventCodes } from "@/Constants/codes";




function eventSelect() {
    const [selectedType, setSelectedType] = useState('');

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    }

    return (
        <>
            <Select>
                <SelectTrigger>
                    <SelectValue>Select Category</SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="event">Event</SelectItem>
                    <SelectItem value="workshop">Workshop</SelectItem>
                </SelectContent>
            </Select>

            {selectedType === 'event' && (
                <Select>
                    <SelectTrigger>
                        <SelectValue>Select Event</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        {eventCodes.map((event) => (
                            <SelectItem key={event}>{event}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            )}

            {selectedType === 'workshop' && (
                <Select>
                    <SelectTrigger>
                        <SelectValue>Select Workshop</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        {workshopCodes.map((workshop) => (
                            <SelectItem key={workshop}>{workshop}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            )}
        </>
    )
}

export { eventSelect };