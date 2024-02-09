export interface Country {
    name: string;
    capital: string;
    population: number;
    flagUrl: string;
}

export enum TimerStatus {
    PAUSED="pause",
    ACTIVE="active",
    FINISHED="finished",

}