import React , { useState } from 'react'
import './SignUp.css';

const SignUp = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const [success,setSuccess] = useState("");

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
    const validatePassword = (password) => password.length > 5;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if(!name || !email || !password) return setError("All the fields are required!");
        if(!validateEmail(email)) return setError("Invalid Email!");
        if(!validatePassword(password)) return setError("Password Length must be greater than 6!");

    try{
        const res = await fetch("http://localhost:3000/api/users/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await res.json();
        if(!res.ok) throw new Error(data.message || "signup failed")

            setSuccess("user registered successfully!!");
            setName("");setEmail("");setPassword("");
        }
    catch(error){
        setError(error.message);
        }
    }


return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUp;