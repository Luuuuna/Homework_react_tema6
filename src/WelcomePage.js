import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";

const WelcomePage = () => {
    const [date, setDate] = useState(new Date());
    const [userAgent, setUserAgent] = useState(navigator.userAgent);

    useEffect(() => {
        const interval = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    function handleMouseMove(e) {
        document.getElementById('xy').innerHTML =  (`Текущие координаты курсора: ${e.clientX}, ${e.clientY}`);
    }
 
    return (
        <div onMouseMove={handleMouseMove} className="container">
            <h2>Приветствуем вас!</h2>
            <p>Дата: {date.toLocaleDateString()}</p>
            <p>Точное время: {date.toLocaleTimeString()}</p>
            <p>User Agent: {userAgent}</p>
            <p>View Port: {window.innerWidth} x {window.innerHeight}, Плотность пикселей: {window.devicePixelRatio}</p>
            <p id="xy"></p>
        </div>
    );
};

export default WelcomePage;