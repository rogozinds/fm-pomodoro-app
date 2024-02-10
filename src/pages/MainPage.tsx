import {RoundTimer} from "../components/RoundTimer";
import { FaCog } from "react-icons/fa";
import styles from './MainPage.module.css';
import {TimeMenu} from "../components/TimeMenu.tsx";
import { useAtom, useAtomValue } from 'jotai';
import {breaks,currentBreakIndex, timeSec} from "../store/state.ts";

export const MainPage = () => {
    const [breaksValue, setBreaks] = useAtom(breaks);
    const [timeIndex,setTimeIndex] = useAtom(currentBreakIndex);
    const timeValue= useAtomValue(timeSec);
    return (
        <>
            <h2>pomodoro</h2>
            <TimeMenu breakMin={breaksValue} selected={timeIndex} setSelected={setTimeIndex}></TimeMenu>
            <RoundTimer time={timeValue}></RoundTimer>
           <FaCog className={styles.settings_icon} />
        </>
    );
};