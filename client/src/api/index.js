import axios from "axios";
import queryString from "query-string";

const httpClient = axios.create({
  baseURL: "http://localhost:3000",
});

export const postUser = (values) => {
    return httpClient.post("/users", values);
}

export const getAllUsers = (options = {}) => {
    const defultOptions = {
        page: 1,
        amount: 5,
    }
    const resultOptions = {
        ...defultOptions,
        ...options
    }
  return httpClient.get(`/users?${queryString.stringify(resultOptions)}`);
};
