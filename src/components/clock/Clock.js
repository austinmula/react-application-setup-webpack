import React, { useEffect, useState } from "react";



export const Clock = (props) => {
    const [staticTime, setStaticTime] = useState(new Date().toUTCString())
    // const [interactiveTime, setInteractiveTime] = useState(new Date().toUTCString())
    // const [interactiveTime, setInteractiveTime] = useState(new Date().toUTCString())
    const [interactiveTime, setInteractiveTime] = useState(new Date().toUTCString())

    useEffect(() => {
        setInterval(() => setInteractiveTime(new Date().toUTCString()), 1000)
    }, [interactiveTime])

    const continent = props.city.continent;
    const city = props.city.city;
    const tz = `${continent}/${city}`;

    return (
        <div className="clock-card">
            <h6>{props.city}  -  {props.continent}</h6>
            <p>{interactiveTime}</p>
            <p>{interactiveTime.toLocaleString('en-US', { timezone: `${props.continent}/${props.city}` })}</p>
        </div>
    );
}



export default Clock;