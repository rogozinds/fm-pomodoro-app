import styles from './ColorSwitcher.module.css';
import { useAtom } from 'jotai';
import {colorAtom} from "../store/state.ts";

const colors = [
  { name: '--pink', colorCode: '#F87070' },
  { name: '--marine', colorCode: '#70F3F8' },
  { name: '--violet', colorCode: '#D881F8' },
];
export const ColorSwitcher = () => {
    const [currentColor, setCurrentColor] = useAtom(colorAtom);

    const changeHighlightColor = (colorVarName:string) => {
        setCurrentColor(colorVarName);
        document.documentElement.style.setProperty('--highlight-color', `var(${colorVarName})`);
    };

    return (
        <div className={styles.main}>
            {colors.map((color) => (
                <div
                    key={color.name}
                    className={`${styles.circle} ${currentColor === color.name ? styles.selected : ''}`}
                    style={{ backgroundColor: color.colorCode }}
                    onClick={() => changeHighlightColor(color.name)}
                >
                    {currentColor === color.name ? '✓' : ''}
                </div>
            ))}
        </div>
    );
};
