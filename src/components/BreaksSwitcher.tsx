import styles from './BreakSwitch.module.css';
import { useAtom } from 'jotai';
import {breaksAtom, colorAtom} from "../store/state.ts";
import React, {useEffect, useState} from "react";

interface Props {
    onBreaksChange:(_:number[])=>void
}
export const BreaksSwitcher:React.FC<Props> = ({onBreaksChange}) => {
    const [breaks, setBreaks] = useAtom(breaksAtom);
    const [localBreaks, setLocalBreaks] = useState(breaks);
    // Update localBreaks when any of the inputs change
    const handleChange = (index, value) => {
        debugger;
        const updatedBreaks = [...localBreaks];
        updatedBreaks[index] = parseInt(value, 10) || 0; // Default to 0 if parseInt returns NaN
        setLocalBreaks(updatedBreaks);
        onBreaksChange(updatedBreaks);
    };
   useEffect(() => {
        setLocalBreaks(breaks); // Sync with global state when it changes
    }, [breaks]);

    // Instead of handling "Apply" here, we'll just call onBreaksChange
    // whenever there's a change to the local state
   useEffect(() => {
        onBreaksChange(localBreaks);
    }, [localBreaks, onBreaksChange]);

    return (
        <div>
            <div>
                <label htmlFor="pomodoro">Pomodoro (minutes):</label>
                <input
                    id="pomodoro"
                    type="number"
                    value={localBreaks[0]}
                    onChange={(e) => handleChange(0, e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="longBreak">Long Break (minutes):</label>
                <input
                    id="longBreak"
                    type="number"
                    value={localBreaks[1]}
                    onChange={(e) => handleChange(1, e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="shortBreak">Short Break (minutes):</label>
                <input
                    id="shortBreak"
                    type="number"
                    value={localBreaks[2]}
                    onChange={(e) => handleChange(2, e.target.value)}
                />
            </div>
        </div>
    );
};
