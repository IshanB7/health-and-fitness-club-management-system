import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../styles/MyCalendar.css';

const localizer = momentLocalizer(moment);

function MyCalendar() {
    const [currentView, setView] = useState('month');
    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        const response = await fetch(`http://localhost:3000/trainer?username=${encodeURIComponent(localStorage.getItem('username'))}`);
        const result = await response.json();
        let results = [];
        for (let each of result) {
            results.push({
                title: `${localStorage.getItem('username')}'s class`,
                start: new Date(each.start_time),
                end: new Date(each.end_time)
            });
        }
        setEvents(results);
    }

    const handleSelect = async ({start, end}) => {
        const response = await fetch('http://localhost:3000/trainer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username': localStorage.getItem('username'), 'start': start.toISOString(), 'end': end.toISOString(), 'method': 'add'})
        });

        if (!response.ok) {
            alert('Failed to add event');
        } else {
            fetchEvents();
        }
    }

    const handleRemove = async (event) => {
        const { start, end } = event;
        const response = await fetch('http://localhost:3000/trainer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username': localStorage.getItem('username'), 'start': start.toISOString(), 'end': end.toISOString(), 'method': 'remove'})
        });

        if (!response.ok) {
            alert('Failed to remove event');
        } else {
            fetchEvents();
        }
    }

    const handleView = view => setView(view);

    useEffect(() => {
        fetchEvents();
    }, []);
    
    return (
        <div style={{ height: '500px'}}>
            <Calendar 
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                views={['month', 'day']}
                style={{ margin: '50px'}}
                selectable={currentView === 'day'}
                events={events}
                onView={handleView}
                onDoubleClickEvent={currentView === 'day' ? handleRemove: undefined}
                onSelectSlot={handleSelect}
                min={new Date().setHours(8,0,0)}
                max={new Date().setHours(20,0,0)}
            />
        </div>
    );
}

export default MyCalendar;