import React, { useState, useEffect } from "react";
import "./SwitchButton.css";

const SwitchButton = ({ isSwitchOn, setSwitch }) => {
    const [isOn, setIsOn] = useState(isSwitchOn);

    useEffect(() => {
        setIsOn(isSwitchOn); 
    }, [isSwitchOn]);

    const toggleSwitch = () => {
        setIsOn(!isOn);
        setSwitch(!isOn);
    };

    return (
        <div className="switch-container" onClick={toggleSwitch}>
            <div className={`switch ${isOn ? "on" : "off"}`}>
                <div className="switch-circle"></div>
            </div>
        </div>
    );
};

export default SwitchButton;
