import {atom} from "jotai";

export const stateAtom = atom(
    {
        font:"",
        color:""
    }
);

const DEFAULT_BREAKS_MIN = [30, 15, 5];
export const breaksAtom = atom(
    DEFAULT_BREAKS_MIN
);
export const currentBreakIndexAtom = atom(0);
export const timeSecAtom = atom((get)=>{
    const times =get(breaksAtom);
    const index =get(currentBreakIndexAtom);
    if(index<times.length){
        return times[index] * 60;
    }
    return DEFAULT_BREAKS_MIN[0] * 60;
});

export const fontAtom = atom('Kumbh Sans'); // Default font
export const colorAtom = atom('--pink');