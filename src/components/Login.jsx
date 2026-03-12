import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "test@test.com" && password === "123456")
        {
            navigate("/projects");
        } 
        else 
            {
                setError("Invalid email or password");
            }
  };

  return (
    <div>

      <div className="login-container">
        <div className="login-card">

            <h2>Login</h2>

    <form onSubmit={handleLogin}>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button className="login-btn">Login</button>

    </form>

    {error && <p className="error">{error}</p>}

        </div>
      </div>

    </div>
  );
}

export default Login;