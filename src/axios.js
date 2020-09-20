import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "http://localhost:5002/clone-12de7/us-central1/api",
  // "http://localhost:5002/challenge-4b2b2/us-central1/api",
});

export default instance;
