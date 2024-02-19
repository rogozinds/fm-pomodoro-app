import {useEffect, useMemo, useState} from "react";
import styles from './RoundTimer.module.css';
import {TimerStatus} from "../types/status";

interface Props {
   time :number
}
//TODO need to reset the remaining timer when setting the new time value
export const RoundTimer:React.FC<Props> = ({time}) => {
    //TODO Use var instead
    // let timerInnerColor = document.documentElement.style.getPropertyValue('--highlight-color');
    // let timerInnerColor = "#F87070"
    const [passedTime, setPassedTime] = useState(time);
    const [status, setStatus] = useState(TimerStatus.FINISHED);
    useEffect(() => {
        // This function will be called every time `time` prop changes
        setPassedTime(time); // Reset passedTime to the new value of time
        setStatus(TimerStatus.FINISHED); // Reset status to FINISHED or any initial status you want
    }, [time]);
    let timerText = useMemo(() => {
        switch (status) {
            case TimerStatus.ACTIVE:
                return "pause";
            case TimerStatus.PAUSED:
                return "resume";
            case TimerStatus.FINISHED:
                return "start";
            default:
                return "start"
        }
    }, [status])
    // Calculate the circle's circumference
    const radius = 45;
    const innerRadius = 45-1;
    const circleLength = 2 * Math.PI * innerRadius; // Same as your stroke-dasharray value

    // Calculate the stroke-dashoffset based on timeLeft
    const strokeDashoffset = (1 - passedTime / time) * circleLength;

    // Format time in mm:ss for display
    const formatTime = (time:number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2, '0')}`;
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
                if (passedTime > 0 && status === TimerStatus.ACTIVE) {
                    setPassedTime(passedTime - 1);
                } else if (passedTime === 0 && status === TimerStatus.ACTIVE) {
                    setStatus(TimerStatus.FINISHED)
                }
            }, 1000);
            return () => clearTimeout(timerId);
        }, [passedTime, status]
    );

    // --light-black: #1E213F;
    // --dark-violet: #2E325A;
    return (
        <>
            <div className={styles.main} onClick={timerClick}>
                <svg viewBox="0 0 100 100" className={styles.timer}>
                    <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="25%" style={{stopColor: 'white', stopOpacity: 1}} />
                            <stop offset="100%" style={{stopColor: 'red', stopOpacity: 1}} />
                        </linearGradient>
                    </defs>
                        <circle cx="50" cy="50" r={radius} className={styles.circle}/>
                        <circle cx="50" cy="50" r={innerRadius} className={styles.inner_circle}
                            stroke-dasharray={circleLength} stroke-dashoffset={strokeDashoffset}
                                // stroke-dasharray={circleLength} stroke-dashoffset={10}
                                />

                        <text x="50" y="55" text-anchor="middle" className={styles.timer_time}>
                            {formatTime(passedTime)}
                        </text>
                        <text x="50" y="55" text-anchor="middle" className={styles.timer_text}>
                            {timerText}
                        </text>
                    </svg>
            </div>

        </>
    );
};