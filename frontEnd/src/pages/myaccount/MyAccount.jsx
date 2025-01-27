import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { user } from "../../redux/userSlice";
import "./myAccount.css";

const MyAccount = () => {
  const navigate = useNavigate();
  // const history = useHistory();
  const dispatch = useDispatch();
  const [regData, setRegData] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleRegChange(e) {
    setRegData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  const register = async () => {
    try {
      let res = await axios.post(
        "http://localhost:5000/api/auth/register",
        regData
      );
      localStorage.setItem("user", JSON.stringify(res.data));
      dispatch(user(res.data));
      res && navigate(-1);
    } catch (error) {
      alert("Email already exist");
    }
  };
  const login = async () => {
    try {
      let res = await axios.post("http://localhost:5000/api/auth/login", {
        email: regData.email,
        password: regData.password,
      });
      localStorage.setItem("user", JSON.stringify(res.data));
      dispatch(user(res.data));
      res && navigate(-1);
    } catch (error) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login-main">
      <div className="login-container">
        <h2>Login</h2>
        <div className="login">
          <label>Email address *</label>
          <input type="text" name="email" onChange={handleRegChange} />
        </div>
        <div className="login">
          <label>Password *</label>
          <input type="password" name="password" onChange={handleRegChange} />
        </div>
        <div className="loginCheck">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <b>Forgot Password?</b>
        </div>
        <div className="login-btn">
          <button onClick={login}>LOGIN</button>
        </div>
      </div>
      <div className="login-container">
        <h2>Register</h2>
        <div className="login">
          <label>Username *</label>
          <input type="text" name="username" onChange={handleRegChange} />
        </div>
        <div className="login">
          <label>Email address *</label>
          <input type="email" name="email" onChange={handleRegChange} />
        </div>
        <div className="login">
          <label>Password *</label>
          <input type="password" name="password" onChange={handleRegChange} />
        </div>
        <div className="privacy">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <span>privacy policy.</span>
        </div>
        <div className="login-btn">
          <button onClick={register}>REGISTER</button>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
