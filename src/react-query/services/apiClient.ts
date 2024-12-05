import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:'https://capital-compass-server.liara.run/api/'
})

