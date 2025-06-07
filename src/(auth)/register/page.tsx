"use client";
import { useAuthStore } from "@/store/Auth";
import React from "react";

function RegisterPage() {
    const { createAccount, login } = useAuthStore();
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState("");

    const handleSubmuit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // collect data
        const formData = new FormData(e.currentTarget);
        const firstname = formData.get("firstname");
        const lastname = formData.get("lastname");
        const email = formData.get("email");
        const password = formData.get("password");

        // validate
        if (!firstname || !lastname || !email || !password) {
            setError(() => "All fields are required");
            return;
        }

        // call the store
        setIsLoading(true);
        setError("");

        const response = await createAccount(
            `${firstname} ${lastname}`,
            email?.toString(),
            password?.toString()
        )

        if (response.error) {
            setError(() => response.error!.message);
        }
        else {
            const loginResoponse = await login(email.toString(), password.toString());
            if (loginResoponse.error) {
                setError(() => loginResoponse.error!.message);
            }
        }
        setIsLoading(() => false);
    }

    return (<div>
        {error && (<p>{error}</p>)}
        <form onSubmit={handleSubmuit}></form>
        </div>)
}

export default RegisterPage;