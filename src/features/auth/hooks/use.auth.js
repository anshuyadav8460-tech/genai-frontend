import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";
import {
    login,
    register,
    logout,
    getMe
} from "../services/auth.api";

export const useAuth = () => {

    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }

    const {
        user,
        setUser,
        loading,
        setLoading
    } = context;

    // =========================
    // LOGIN
    // =========================
    const handleLogin = async ({ email, password }) => {
        setLoading(true);

        try {
            const data = await login({
                email,
                password
            });

            setUser(data.user);

            return data;

        } catch (error) {
            console.error("LOGIN ERROR:", error);
            throw error;

        } finally {
            setLoading(false);
        }
    };


    // =========================
    // REGISTER
    // =========================
    const handleRegister = async ({
        username,
        email,
        password
    }) => {

        setLoading(true);

        try {
            const data = await register({
                username,
                email,
                password
            });

            setUser(data.user);

            return data;

        } catch (error) {
            console.error("REGISTER ERROR:", error);
            throw error;

        } finally {
            setLoading(false);
        }
    };


    // =========================
    // LOGOUT
    // =========================
    const handleLogout = async () => {

        setLoading(true);

        try {
            const data = await logout();

            setUser(null);

            return data;

        } catch (error) {
            console.error("LOGOUT ERROR:", error);
            throw error;

        } finally {
            setLoading(false);
        }
    };


    // =========================
    // GET CURRENT USER
    // =========================
    useEffect(() => {

        const getAndSetUser = async () => {

            try {

                const data = await getMe();

                setUser(data.user);

            } catch (error) {

                console.error("GET ME ERROR:", error);

                // User login nahi hai
                setUser(null);

            } finally {

                setLoading(false);

            }
        };

        getAndSetUser();

    }, [setLoading, setUser]);


    return {
        user,
        loading,
        handleLogin,
        handleRegister,
        handleLogout
    };
};