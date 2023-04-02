import axios from "axios";

const ApiConn = axios.create({
  baseURL: "http://3.87.45.6",
});

export default ApiConn;
