import axios from "axios";
import { useState } from "react";

function Login() {
  const [form, setForm] = useState({});

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    const res = await axios.post(
      "http://localhost:5000/auth/login",
      form
    );
    localStorage.setItem("token", res.data.token);
    alert("Login Successful");
  };

  return (
    <div>
      <h2>Login</h2>
      <input name="email" placeholder="Email" onChange={handleChange} /><br />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} /><br />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;