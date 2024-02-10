import styles from './FontSwitcher.module.css';
import { useAtom } from 'jotai';
import {fontAtom} from "../store/state.ts";

const fonts = [
    { name: 'Kumbh Sans', class: styles.kumbh_sans },
    { name: 'Roboto Slab', class: styles.robot_slab },
    { name: 'Space Mono', class: styles.space_mono },
];

export const FontSwitcher = () => {
    const [currentFont, setCurrentFont] = useAtom(fontAtom);

    return (
        <div className={styles.main}>
            {fonts.map((font) => (
                <div
                    key={font.name}
                    className={`${styles.circle} ${currentFont === font.name ? styles.selected : ''} ${font.class}`}
                    onClick={() => setCurrentFont(font.name)}
                >
                    Aa
                </div>
            ))}
        </div>
    );
};
