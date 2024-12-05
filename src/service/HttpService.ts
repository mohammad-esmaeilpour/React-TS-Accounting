import axios from "axios";

const language = window.navigator.language;
axios.defaults.withCredentials = true;
axios.defaults.headers.common["Accept-Language"] = language

export default axios;
