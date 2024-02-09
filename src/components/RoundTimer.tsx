import {useEffect, useMemo, useState} from "react";
import styles from './RoundTimer.module.css';
import {TimerStatus} from "../types/status";

export const RoundTimer = () => {
    //This will be cvahnged throuh settings
    let timerInnerColor = "#F87070"
    const [totalTime, setTotalTime] = useState(30 * 60);
    const [status, setStatus] = useState(TimerStatus.ACTIVE);
    let timerText = useMemo(() => {
        switch (status) {
            case TimerStatus.ACTIVE:
                return "Pause";
            case TimerStatus.PAUSED:
                return "Resume";
            case TimerStatus.FINISHED:
                return "Restart";
            default:
                return "Start"
        }
    }, [status])
    const [timer, setTimer] = useState(25 * 60);
    // Calculate the circle's circumference
    const radius = 45;
    const circleLength = 2 * Math.PI * radius; // Same as your stroke-dasharray value

    // Calculate the stroke-dashoffset based on timeLeft
    const strokeDashoffset = (1 - timer / totalTime) * circleLength;

    // Format time in mm:ss for display
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };
    const timerClick = () => {
        if (status === TimerStatus.ACTIVE) {
            setStatus(TimerStatus.PAUSED)
        } else if (status === TimerStatus.PAUSED) {
            setStatus(TimerStatus.ACTIVE)
        } else if (status === TimerStatus.FINISHED) {
            setStatus(TimerStatus.ACTIVE);
        }
    }
    useEffect(() => {
            const timerId = setTimeout(() => {
                if (timer > 0 && status === TimerStatus.ACTIVE) {
                    setTimer(timer - 1);
                } else if (timer === 0 && status === TimerStatus.ACTIVE) {
                    setStatus(TimerStatus.FINISHED)
                } else {

                }
            }, 1000);
            return () => clearTimeout(timerId);
        }, [timer, status]
    );
    return (
        <>
            <div className={styles.main} onClick={timerClick}>
                    <svg viewBox="0 0 100 100" className={styles.timer}>
                        <circle cx="50" cy="50" r={radius} stroke="#2E325A" stroke-width="10px" fill="transparent"/>
                        <circle cx="50" cy="50" r={radius} stroke={timerInnerColor} strokeWidth={"2px"}
                                fill="transparent"
                            stroke-dasharray={circleLength} stroke-dashoffset={strokeDashoffset}
                                // stroke-dasharray={circleLength} stroke-dashoffset={10}
                                className="timer-progress"/>
                        <text x="50" y="55" text-anchor="middle" fontSize="15" className={styles.timer_time}>
                            {formatTime(timer)}
                        </text>
                        <text x="50" y="55" text-anchor="middle" fontSize="8" className={styles.timer_text}>
                            {timerText}
                        </text>
                    </svg>
                    <svg width="200" height="200" viewBox="-25 -25 250 250" className={styles.timer}>
                        <circle r="90" cx="100" cy="100" fill="transparent" stroke="#e0e0e0" stroke-width="50"
                                stroke-dasharray="565.48px" stroke-dashoffset="0"></circle>
                        <circle r="90" cx="100" cy="100" stroke="#76e5b1" stroke-width="2" stroke-linecap="round"
                                stroke-dashoffset="305px" fill="transparent" stroke-dasharray="565.48px"></circle>
                        <text x="72px" y="115px" fill="#6bdba7" font-size="52px" font-weight="bold"
                              className={styles.timer_time}>46
                        </text>
                    </svg>
            </div>

        </>
    );
};