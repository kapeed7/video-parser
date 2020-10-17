import axios from "axios";

const KEY = "AIzaSyAYld-Fp_6W_ra_t4f-pg-8HBudRfqImp8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
