import axios from "axios";

const api = axios.create({
    baseURL: "https://genai-backend-poyi.onrender.com",
    withCredentials: true,
});
// =========================
// REGISTER
// =========================
export async function register({ username, email, password }) {
    try {
        const response = await api.post("/api/auth/register", {
            username,
            email,
            password,
        });

        return response.data;

    } catch (error) {
        console.error(
            "REGISTER ERROR:",
            error.response?.data || error.message
        );

        throw error;
    }
}


// =========================
// LOGIN
// =========================
export async function login({ email, password }) {
    try {
        const response = await api.post("/api/auth/login", {
            email,
            password,
        });

        console.log("LOGIN RESPONSE:", response.data);

        return response.data;

    } catch (error) {
        console.error(
            "LOGIN ERROR:",
            error.response?.data || error.message
        );

        throw error;
    }
}


// =========================
// LOGOUT
// =========================
export async function logout() {
    try {
        const response = await api.get("/api/auth/logout");

        return response.data;

    } catch (error) {
        console.error(
            "LOGOUT ERROR:",
            error.response?.data || error.message
        );

        throw error;
    }
}


// =========================
// GET CURRENT USER
// =========================
export async function getMe() {
    try {
        const response = await api.get("/api/auth/get-me");

        console.log("GET ME RESPONSE:", response.data);

        return response.data;

    } catch (error) {
        console.error(
            "GET ME ERROR:",
            error.response?.data || error.message
        );

        throw error;
    }
}