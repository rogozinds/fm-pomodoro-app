import {RoundTimer} from "../components/RoundTimer";
import { FaCog } from "react-icons/fa";
import styles from './MainPage.module.css';
import {TimeMenu} from "../components/TimeMenu.tsx";
import { useAtom, useAtomValue } from 'jotai';
import {breaksAtom,currentBreakIndexAtom, timeSecAtom} from "../store/state.ts";
import {useState} from "react";
import {Settings} from "../components/Settings.tsx";

export const MainPage = () => {
    const [breaksValue] = useAtom(breaksAtom);
    const [timeIndex,setTimeIndex] = useAtom(currentBreakIndexAtom);
    const timeValue= useAtomValue(timeSecAtom);
    const [showMenu, setShowMenu] =useState(false)
    return (
        <div className={styles.main}>
            <h2>pomodoro</h2>
            <TimeMenu breakMin={breaksValue} selected={timeIndex} setSelected={setTimeIndex}></TimeMenu>
            <RoundTimer time={timeValue}></RoundTimer>
           <FaCog className={styles.settings_icon} onClick={()=>{setShowMenu(true)}}/>
            {(showMenu &&
                   <Settings setShowMenu={setShowMenu}></Settings>
            )}
        </div>
    );
};