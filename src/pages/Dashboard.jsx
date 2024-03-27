import React from 'react';
import MyCalendar from '../partials/MyCalendar';

function Dashboard() {
    let dash;

    switch (localStorage.getItem('account_type')) {
        case 'member':
            dash = (
                <>

                </>
            );
            break;

        case 'trainer':
            dash = (
                <>
                    <MyCalendar />
                </>
            );
            break;

        case 'admin':
            dash = (
                <>

                </>
            );
            break;
    }

    return (
        <>
            {dash}
        </>
    );
}

export default Dashboard;