import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Login.css";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return "Please enter a valid email address";
  }
  return "";
};

const validatePassword = (password) => {
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;

  if (!passwordRegex.test(password)) {
    return "Password: 8-15 characters, letters, numbers, and symbol.";
  }

  return "";
};

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  //const logincredentials = { email, password };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (email === "" && password === "") {
      setError("Email and Password are required.");
    } else if (email === "") {
      setError("Email is required.");
    } else if (password === "") {
      setError("Password is required.");
    } else if (emailError || passwordError) {
      setError(emailError || passwordError);
    } else {
      alert(email+ password);
        //navigate("/");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="login-page">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 className="login-head">Login Page</h1>
          <div className="login-icon" />
          <div className="login-form-group">
            <label className="login-form-label" htmlFor="username">
              Email:
            </label>
            <input
              className="login-form-input"
              type="text"
              placeholder="Enter Your Email ID"
              name="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="username"
            />
          </div>
          <div className="login-form-group">
            <label className="login-form-label" htmlFor="password">
              Password:
            </label>
            <input
              className="login-form-input"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
            />
            <div className="login-password-icon" onClick={toggleShowPassword}>
              {showPassword ? (
                <RemoveRedEyeOutlinedIcon />
              ) : (
                <VisibilityOffOutlinedIcon />
              )}
            </div>
            <span className="login-form-forget">Forgot Password?</span>
          </div>
          {error && <span className="login-form-error">{error}</span>}
          <button type="submit" className="login-form-login-btn">
            LOGIN
          </button>
          <div className="login-form-no-account">
            New User?&nbsp;
            <Link to="/register" className="login-form-register">
              REGISTER
            </Link>
            &nbsp; here.
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
