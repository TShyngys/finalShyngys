import React, { useState, useEffect } from 'react';

const TimingAPI = () => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const fetchTime = async () => {
            try {
                const response = await fetch('https://worldtimeapi.org/api/ip');
                const data = await response.json();
                setCurrentTime(data.datetime);
            } catch (error) {
                console.error('Error fetching time:', error);
            }
        };

        fetchTime();
    }, []);

    return (
        <div className="timing-api">
            <h2>Timing API</h2>
            <p>Current Time: {currentTime}</p>
        </div>
    );
};

export default TimingAPI;
