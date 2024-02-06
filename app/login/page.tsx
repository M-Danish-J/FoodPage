'use client'
import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
    username: string;
    password: string;
}

const Page = () => {
    const [formData, setFormData] = useState<FormData>({
        username: '',
        password: '',
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let userData = localStorage.getItem('userData');
        if (!userData) {
            alert("Create a User")
            router.push("/signup")
        } else {
            let parsedUserData = JSON.parse(userData)
            if (formData.username === parsedUserData.username && formData.password === parsedUserData.password) {
                alert("Logged In")
            } else {
                alert("Incorrect Credentials")
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const router = useRouter();

    return (
        <div className="bg-white w-96 text-green-500 left-1/2 top-1/2 absolute transform -translate-x-1/2 -translate-y-1/2 box-border p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl mb-8 uppercase text-center">Login</h2>
            <form onSubmit={handleSubmit} autoComplete="off">
                <p className="mb-2">Username</p>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full mb-6 border-b border-green-500 outline-none bg-transparent text-gray-700"
                />
                <p className="mb-2">Password</p>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full mb-6 border-b border-green-500 outline-none bg-transparent text-gray-700"
                />
                <input
                    type="submit"
                    name="login-btn"
                    value="Login"
                    className="w-full bg-green-500 text-white font-semibold py-2 rounded-md transition duration-300 hover:bg-green-600 cursor-pointer"
                />
                <p className="text-center mt-4">Don't have an account? <a onClick={() => router.push('/signup')} href="#" className="text-green-500 hover:text-green-600">Sign Up</a></p>
            </form>
        </div>
    );
};

export default Page;
