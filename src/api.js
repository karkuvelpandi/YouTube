import axios from "axios";
import { firebaseConfig } from "./firebase";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyASfLL9pOzsjaiy5XZ9i9eJWYtxSiSxw_4",
  },
});

export default request;
