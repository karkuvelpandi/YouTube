import axios from "axios";
import { firebaseConfig } from "./firebase";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: process.env.REACT_APP_YT_API,
  },
});

export default request;
