import styles from './BreaksSwitcher.module.css';
import { useAtom } from 'jotai';
import { breaksAtom } from "../store/state.ts";
import React, { useEffect, useState } from "react";
import { TextField } from "./TextField.tsx";

interface Props {
    onBreaksChange: (_: number[]) => void
}
export const BreaksSwitcher: React.FC<Props> = ({ onBreaksChange }) => {
    const [breaks] = useAtom(breaksAtom);
    const [localBreaks, setLocalBreaks] = useState(breaks);
    // Update localBreaks when any of the inputs change
    const handleChange = (index: number, value: string) => {
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
        <div className={styles.main}>
            <TextField
                id={"pomodoro"}
                title={"pomodoro"}
                value={localBreaks[0]}
                onChange={(e) => {
                    handleChange(0, e.target.value)
                }}
            />
            <TextField
                id={"longbreak"}
                title={"long break"}
                value={localBreaks[1]}
                onChange={(e) => {
                    handleChange(1, e.target.value)
                }}
            />
            <TextField
                id={"shordbreak"}
                title={"short break"}
                value={localBreaks[2]}
                onChange={(e) => {
                    handleChange(2, e.target.value)
                }}
            />
        </div>
    );
};
