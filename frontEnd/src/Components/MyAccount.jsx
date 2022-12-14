import React from "react";

const MyAccount = () => {
  return (
    <div className="login-main">
      <div className="login-container">
        <h2>Login</h2>
        <div className="login">
          <label>Username or email address *</label>
          <input type="text" />
        </div>
        <div className="login">
          <label>Password *</label>
          <input type="password" />
        </div>
        <div className="loginCheck">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <b>Forgot Password?</b>
        </div>
        <div className="login-btn">
          <button>LOGIN</button>
        </div>
      </div>
      <div className="login-container">
        <h2>Register</h2>
        <div className="login">
          <label>Username *</label>
          <input type="text" />
        </div>
        <div className="login">
          <label>Email address *</label>
          <input type="email" />
        </div>
        <div className="login">
          <label>Password *</label>
          <input type="password" />
        </div>
        <div className="privacy">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <span>privacy policy.</span>
        </div>
        <div className="login-btn">
          <button>LOGIN</button>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
