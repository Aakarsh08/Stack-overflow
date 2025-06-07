"use client"
import React from 'react'
import { useAuthStore } from '@/store/Auth'


function LoginPage() {
    
    const { login } = useAuthStore();
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState("");

    const handleSubmuit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        if (!email || !password) {
            setError(() => "All fields are required");
            return;
        }
        // handle loading and error
        setIsLoading(() => true);
        setError(() => "");


        const loginResponse = await login(email.toString(), password.toString());
        if (loginResponse.error) {
            setError(() => loginResponse.error!.message);
        }
    }
    return (
        <div>LoginPage</div>
    )
}

export default LoginPage