import {AxiosError} from "axios";

export const handleAxiosError = async (error: AxiosError) => {
    console.log("Problem with Axios", error.message)
};
