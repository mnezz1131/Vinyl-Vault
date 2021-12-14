import "./SignUp.css";
import { useState } from "react";
import Layout from "../../components/Layout/Layout.jsx";

const SignUp = ({ user, handleLogout, handleRegister }) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));

  const onSignUp = async (event) => {
    event.preventDefault();

    try {
      if (password === passwordConfirmation) {
        await handleRegister(form);
      } else {
        throw new Error("Passwords do not match");
      }
    } catch (error) {
      console.error(error);
      setForm({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        isError: true,
        errorMsg: "Sign Up Details Invalid",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button type="submit">Sign Up</button>;
    }
  };

  const { username, email, password, passwordConfirmation } = form;

  return (
    <Layout user={user} handleLogout={handleLogout}>
      <div className="sign-up-form-container">
        <div className="sign-in-container">
          <div className="sign-in-title">Sign Up</div>
          <form className="sign-in-form" onSubmit={onSignUp}>
            <label className="signup-label">Username</label>
            <input
              className="signin-inputbox"
              required
              type="text"
              name="username"
              value={username}
              placeholder="Enter username"
              onChange={handleChange}
            />
            <label>Email address</label>
            <input
              className="signin-inputbox"
              required
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={handleChange}
            />
            <label>Password</label>
            <input
              className="signin-inputbox"
              required
              name="password"
              value={password}
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <label>Password Confirmation</label>
            <input
              className="signin-inputbox"
              required
              name="passwordConfirmation"
              value={passwordConfirmation}
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange}
            />
            {renderError()}
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
