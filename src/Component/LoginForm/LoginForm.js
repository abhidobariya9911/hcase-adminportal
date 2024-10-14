import { useState } from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    navigate("/home");
  };
  return (
    <>
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-heading">
            <h2>Login</h2>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password"    value={password}   onChange={(e) => setPassword(e.target.value)} required/>
          </div>
            <div className="form-actions">
                <button type="submit" className="submit-btn">Login</button>
            </div>
        </form>
      </div>
    </>
  );
};
export default LoginForm;
