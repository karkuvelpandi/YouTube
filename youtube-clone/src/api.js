import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyCuTlxKBACdsHwG821C3HziAuVbduStBP8",
  },
});

export default request;
