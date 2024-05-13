import axios from "axios"
import {
  CONNECTOR_NEW_BURN_USERNAME,
  CONNECTOR_NEW_BURN_PASSWORD
} from "react-native-dotenv"
const newburn = axios.create({
  baseURL: "https://devstringx.com",
  auth: {
    username: CONNECTOR_NEW_BURN_USERNAME,
    password: CONNECTOR_NEW_BURN_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
