import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3" 
})
export default instance;

// f40659f0ee8492ad32d8fb5e5eda12cb