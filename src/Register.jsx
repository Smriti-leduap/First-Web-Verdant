import { useState } from "react";

const Register = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={user.name}
                        onChange={handleInput}
                        required
                        autoComplete="off"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={user.email}
                        onChange={handleInput}
                        required
                        autoComplete="off"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={user.password}
                        onChange={handleInput}
                        required
                        autoComplete="off"
                    />
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
                <div>
                </div>
            </form>
        </div>
    )
}

export default Register