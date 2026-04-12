import { useState } from "react";

const Signup = ({ onLoginClick = () => {} }) => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.password !== user.confirmPassword) {
            alert('Passwords do not match.');
            return;
        }
        console.log('Signup data:', user);
        alert('Signup submitted!');
    }

    return (
        <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={user.name}
                        onChange={handleInput}
                        required
                        autoComplete="name"
                        className="mt-2 w-full rounded-2xl border border-[#cbd5d1] bg-[#f7faf3] px-4 py-3 text-gray-900 outline-none focus:border-[#2d5a27] focus:ring-2 focus:ring-[#dce8d3]/70"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={user.email}
                        onChange={handleInput}
                        required
                        autoComplete="email"
                        className="mt-2 w-full rounded-2xl border border-[#cbd5d1] bg-[#f7faf3] px-4 py-3 text-gray-900 outline-none focus:border-[#2d5a27] focus:ring-2 focus:ring-[#dce8d3]/70"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={user.password}
                        onChange={handleInput}
                        required
                        autoComplete="new-password"
                        className="mt-2 w-full rounded-2xl border border-[#cbd5d1] bg-[#f7faf3] px-4 py-3 text-gray-900 outline-none focus:border-[#2d5a27] focus:ring-2 focus:ring-[#dce8d3]/70"
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={user.confirmPassword}
                        onChange={handleInput}
                        required
                        autoComplete="new-password"
                        className="mt-2 w-full rounded-2xl border border-[#cbd5d1] bg-[#f7faf3] px-4 py-3 text-gray-900 outline-none focus:border-[#2d5a27] focus:ring-2 focus:ring-[#dce8d3]/70"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full rounded-2xl bg-[#2d5a27] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#3b6a33]"
                    >
                        Create Account
                    </button>
                </div>
            </form>
            <p className="text-sm text-gray-500">
                Already have an account?{' '}
                <button
                    type="button"
                    onClick={onLoginClick}
                    className="text-[#2d5a27] font-semibold hover:underline"
                >
                    Login here
                </button>
            </p>
        </div>
    )
}

export default Signup
