import styles from './Settings.module.css';
import {FontSwitcher} from "./FontSwitcher.tsx";
import {ColorSwitcher} from "./ColorSwitcher.tsx";
import {breaksAtom} from "../store/state.ts";
import {useState} from "react";
import {useAtom} from "jotai";
import {BreaksSwitcher} from "./BreaksSwitcher.tsx";

const Delimiter = () => {
  return <div className={styles.delimiter}></div>;
};
interface Props {
    setShowMenu:(_:boolean)=>void;
}
export const Settings:React.FC<Props> = ({setShowMenu}) => {
    const [, setBreaks] = useAtom(breaksAtom);
    const [tempBreaks, setTempBreaks] = useState<number[]|null>(null);

    const handleApply = () => {
        if (tempBreaks) {
            setBreaks(tempBreaks);
        }
        setShowMenu(false);
    };
    return (
        <>
            <div className={styles.main} >
                <div className={styles.header}>
                    <div className={styles.line}>
                        <h2>Settings </h2>
                        <h3 style={{cursor:"pointer"}} onClick={()=>setShowMenu(false)}>X</h3>
                    </div>
                </div>
                <Delimiter></Delimiter>
                <div className={styles.content}>

                    <div className={styles.line}>
                        <h3>TIME&nbsp;&nbsp;(MINUTES)</h3>
                    </div>
                    <div className={styles.line}>
                        <BreaksSwitcher onBreaksChange={setTempBreaks} />
                    </div>
                    <Delimiter></Delimiter>
                    <div className={styles.line}>
                        <h3>FONT</h3>
                        <FontSwitcher/>
                    </div>
                    <Delimiter></Delimiter>
                    <div className={styles.line}>
                        <h3>COLOR</h3>
                        <ColorSwitcher/>
                    </div>
                </div>
                <div className={styles.apply_button} onClick={handleApply}>Apply</div>
            </div>
        </>
    );
};