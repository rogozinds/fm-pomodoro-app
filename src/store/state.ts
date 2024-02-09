import {atomWithRefresh} from "./jotaiUtils";
import {loadable} from "jotai/utils";
import {atom} from "jotai";

export const stateAtom = atom(
    {
        font:"",
        color:""
    }
);

export const timer = atom(
    30
);