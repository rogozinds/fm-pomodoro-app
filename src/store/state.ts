import {atomWithRefresh} from "./jotaiUtils";
import {loadable} from "jotai/utils";
import {atom} from "jotai";

export const stateAtom = atom(
    {
        font:"",
        color:""
    }
);

const DEFAULT_BREAKS_MIN = [30, 15, 5];
export const breaks = atom(
    DEFAULT_BREAKS_MIN
);
export const currentBreakIndex = atom(0);
export const timeSec = atom((get)=>{
    const times =get(breaks);
    const index =get(currentBreakIndex);
    if(index<times.length){
        return times[index] * 60;
    }
    return DEFAULT_BREAKS_MIN[0] * 60;
});