import React, { useState } from "react";

import './Signup.css'
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const sendOtp = () => {
    // Code to send OTP to the given email address
    setOtpSent(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!otpSent) {
      setError("Please send the OTP first");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    // Code to submit the form
    console.log("Email: ", email);
    console.log("Full Name: ", fullName);
    console.log("Password: ", password);
    console.log("OTP: ", otp);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={handleFullNameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </div>
      {otpSent ? (
        <div>
          <label htmlFor="otp">OTP:</label>
          <input type="text" id="otp" value={otp} onChange={handleOtpChange} />
        </div>
      ) : (
        <div>
          <button type="button" onClick={sendOtp}>
            Send OTP
          </button>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
