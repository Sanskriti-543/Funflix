import axios from "axios";

export const GetService = async () => {
    const response = await axios.get("https://moviesapp.free.beeceptor.com/moviesapp");
    return response.data
}