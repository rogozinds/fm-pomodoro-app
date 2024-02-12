import styles from './TextField.module.css';
import {ChangeEvent} from "react";

interface Props {
    id:string;
    title: string;
    value:number;
    onChange: (e:ChangeEvent<number>)=>void
}
export const TextField:React.FC<Props> = ({value, onChange, title, id}) => {
    return (
        <div className={styles.main}>
            <label htmlFor={id} className={styles.label}>{title}</label>
            <input
                id={id}
                type="number"
                className={styles.input}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};
