import React, { useState, useEffect } from "react";

const Timer = ({ minutes, seconds, func }) => {
    const initialTime = minutes * 60 + seconds;
    const [remainingTime, setRemainingTime] = useState(
        localStorage.getItem("timer") || initialTime
    );

    useEffect(() => {
        localStorage.setItem("timer", remainingTime.toString());
    }, [remainingTime]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (remainingTime === 0) {
            // Timer has reached zero, do something
        }
    }, [remainingTime]);

    const formatTime = (time) => {
        const formattedMinutes = Math.floor(time / 60)
            .toString()
            .padStart(2, "0");
        const formattedSeconds = (time % 60).toString().padStart(2, "0");
        return `${formattedMinutes}:${formattedSeconds}`;
    };

    return (
        <div>
            <p className="text-center">{formatTime(remainingTime)}</p>
        </div>
    );
};

export default Timer;
