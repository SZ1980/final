import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmU3MDBiNGNjMWJiYmFlMzRmNTlkOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3ODM5NzcwOCwiZXhwIjoxNjc4NjU2OTA4fQ.P1cQUYBC_nRTQ4u6sGXfPD5YqBsPTGmADLlnjvZX6WI";
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
