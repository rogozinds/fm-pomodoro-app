import styles from './TimeMenu.module.css';

interface Props {
   selected: number;
   setSelected: (_:number)=>void;
   breakMin :number[]; //big, small, mid break duration
}
interface ButtonProps {
    title: string;
    onClick:()=>void;
    active:boolean;
}
export const TimeButton:React.FC<ButtonProps> = ({title, onClick, active}) => {
    const buttonClass = active
        ? `${styles.break_button} ${styles.active}` // If the button is active, include the active class
        : styles.break_button; // Otherwise, just use the default break_button class
    return (
       <div className={buttonClass} onClick={onClick}>
           {title}
       </div>
    )
};
export const TimeMenu:React.FC<Props> = ({ selected, setSelected}) => {
    return (
        <>
                <div className={styles.button_group}>
                    <TimeButton title={"pomodoro"} active={selected===0} onClick={()=>setSelected(0)}></TimeButton>
                    <TimeButton title={"long break"} active={selected===1} onClick={()=>setSelected(1)}></TimeButton>
                    <TimeButton title={"short break"} active={selected===2}  onClick={()=>setSelected(2)}></TimeButton>
                </div>
        </>
    );
};