import axios from "axios"
import {
  CONNECTOR_NEW_DTTEST_PASSWORD,
  CONNECTOR_NEW_DTTEST_USERNAME
} from "react-native-dotenv"
const newdttest = axios.create({
  baseURL: "https://crowdbotics.com",
  auth: {
    username: CONNECTOR_NEW_DTTEST_PASSWORD,
    password: CONNECTOR_NEW_DTTEST_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
