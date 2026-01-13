import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/auth/signup", form);
    alert("Signup Successful");
    navigate("/");
  };

  return (
    <div>
      <h2>Signup</h2>
      <input name="name" placeholder="Name" onChange={handleChange} /><br />
      <input name="email" placeholder="Email" onChange={handleChange} /><br />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} /><br />
      <button onClick={handleSubmit}>Signup</button>
    </div>
  );
}

export default Register;