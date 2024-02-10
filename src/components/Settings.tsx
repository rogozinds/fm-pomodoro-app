import styles from './Settings.module.css';
import {FontSwitcher} from "./FontSwitcher.tsx";
import {ColorSwitcher} from "./ColorSwitcher.tsx";
import {breaksAtom} from "../store/state.ts";
import {useState} from "react";
import {useAtom} from "jotai";
import {BreaksSwitcher} from "./BreaksSwitcher.tsx";

interface Props {
    setShowMenu:(boolean)=>void;
}
export const Settings:React.FC<Props> = ({setShowMenu}) => {
    const [, setBreaks] = useAtom(breaksAtom);
    const [tempBreaks, setTempBreaks] = useState(null);

    const handleApply = () => {
        if (tempBreaks) {
            setBreaks(tempBreaks);
        }
        setShowMenu(false);
    };
    return (
        <>
            <div className={styles.main} >
                <div className={styles.line}>
                    <h2>Settings </h2>
                    <h3 style={{cursor:"pointer"}} onClick={()=>setShowMenu(false)}>X</h3>
                </div>
                <div className={styles.line}>
                    <h3>BREAKS</h3>
                    <BreaksSwitcher onBreaksChange={setTempBreaks} />
                </div>
                <div className={styles.line}>
                    <h3>FONT</h3>
                    <FontSwitcher/>
                </div>
                <div className={styles.line}>
                    <h3>COLOR</h3>
                    <ColorSwitcher/>
                </div>
                <div className={styles.apply_button} onClick={handleApply}>Apply</div>
            </div>
        </>
    );
};