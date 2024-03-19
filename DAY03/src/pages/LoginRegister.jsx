import "../assets/css/LoginRegister.css";
import { useDispatch } from "react-redux";
import { login } from "../components/redux/UserSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const generateRandomCaptcha = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from(
    { length: 5 },
    () => characters[Math.floor(Math.random() * characters.length)]
  ).join("");
};

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

const CheckPassword = (password, confirmPassword) => {
  if (password != confirmPassword) {
    return "Password does not match";
  }
  return "";
};

const CheckCaptcha = (a, b) => {
  if (a != b) {
    return "Enter Valid Captcha";
  }
  return "";
};

function LoginRegister() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState(generateRandomCaptcha());
  const [enteredCaptcha, setEnteredCaptcha] = useState("");
  const [email_r, setEmail_r] = useState("");
  const [password_r, setPassword_r] = useState("");
  const [Username, setUsername] = useState("");
  const [confirm_password, setConfirm_Password] = useState("");
  const [error, setError] = useState("Welcome Back");
  const [error1, setError1] = useState("New User");

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const captchaCheck = CheckCaptcha(captcha, enteredCaptcha);

    if (email === "" && password === "") {
      setError("Email and Password are required.");
    } else if (email === "") {
      setError("Email is required.");
    } else if (password === "") {
      setError("Password is required.");
    } else if (enteredCaptcha === "") {
      setError("Enter Captcha");
    } else if (emailError || passwordError || captchaCheck) {
      setError(emailError || passwordError || captchaCheck);
    } else if(email === "admin@gmail.com" && password==="Admin@12345"){
      navigate("/admin/dashboard");
    } else {
      dispatch(login(email));
      navigate("/");
    }
  };

  const handleRegistrationSubmit = async (event) => {
    event.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const passwordCheck = CheckPassword(password, confirm_password);

    if (email_r == "" || password_r == "" || Username == "") {
      setError1("Enter all the fields");
    } else if (email_r === "") {
      setError1("Email is required.");
    } else if (password_r === "") {
      setError1("Password is required.");
    } else if (Username === "") {
      setError1("username is required.");
    } else if (Username || emailError || passwordError || passwordCheck) {
      setError1(Username || emailError || passwordError || passwordCheck);
    } else {
      navigate("/");
    }
  };

  const handleRefreshCaptcha = () => {
    setCaptcha(generateRandomCaptcha());
    setEnteredCaptcha("");
  };

  return (
    <>
      <div className="form-container">
        <div className="form-area">
          <input type="checkbox" id="check" aria-hidden="true" />
          <div className="login-content">
            <form className="user-form" onSubmit={handleLoginSubmit}>
              <label htmlFor="check" aria-hidden="true" className="form-label">
                SignIn
              </label>
              <div className="form-section">
                <input
                  className="form-input"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="label-input" htmlFor="email">
                  Email
                </label>
              </div>
              <div className="form-section">
                <input
                  className="form-input"
                  type="password"
                  name="password"
                  placeholder="Password:"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="label-input" htmlFor="email">
                  Password
                </label>
              </div>
              <div className="form-section">
                <input
                  className="form-input"
                  type="text"
                  name="captcha"
                  placeholder="Captcha"
                  value={enteredCaptcha}
                  onChange={(e) => setEnteredCaptcha(e.target.value)}
                />
                <label className="label-input" htmlFor="email">
                  Captcha
                </label>
                <div className="captcha-generate">
                  <h6>{captcha}</h6>
                  <div className="refresh-button" onClick={handleRefreshCaptcha}>Refresh</div>
                </div>
              </div>
              {error && <div className="error-handle">{error} </div>}
              <button className="form-button">Log in</button>
              <span className="forget-handle">Forgot Password?</span>
            </form>
          </div>

          <div className="register-content">
            <form className="user-form" onSubmit={handleRegistrationSubmit}>
              <label htmlFor="check" aria-hidden="true" className="form-label">
                SignUp
              </label>
              <div className="form-title">FormFunds</div>
              <div className="form-section">
                <input
                  className="form-input"
                  type="text"
                  name="text"
                  placeholder="User Name"
                  value={Username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label className="label-input" htmlFor="email">
                  User Name
                </label>
              </div>
              <div className="form-section">
                <input
                  className="form-input"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={email_r}
                  onChange={(e) => setEmail_r(e.target.value)}
                />
                <label className="label-input" htmlFor="email">
                  Email
                </label>
              </div>
              <div className="form-section">
                <input
                  className="form-input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password_r}
                  onChange={(e) => setPassword_r(e.target.value)}
                />
                <label className="label-input" htmlFor="email">
                  Password
                </label>
                </div>
                <div className="form-section">
                <input
                  className="form-input"
                  type="password"
                  name="password"
                  placeholder="Confirm Password"
                  value={confirm_password}
                  onChange={(e) => setConfirm_Password(e.target.value)}
                />
                <label className="label-input" htmlFor="email">
                  confirmPassword
                </label>
                </div>
              {error1 && <span className="error-handle">{error1} </span>}
              <button className="form-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginRegister;
