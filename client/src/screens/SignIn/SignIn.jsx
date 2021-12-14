import { useState } from "react";
import "./SignIn.css";
import Layout from "../../components/Layout/Layout.jsx";

export default function SignIn({ user, handleLogin, handleLogout }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSignIn = async (event) => {
    event.preventDefault();
    try {
      await handleLogin(form);
    } catch (error) {
      console.error(error);
      setForm({
        isError: true,
        errorMsg: "Invalid Credentials",
        username: "",
        password: "",
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
      return <button type="submit">Sign In</button>;
    }
  };

  const { username, password } = form;

  return (
    <Layout user={user} handleLogout={handleLogout}>
       
      

      <div className="sign-in-form-container">
        
        <div className="sign-in-container">
          



          <div className="sign-in-title">Sign In</div>

          <div className="sign-in">
   
            <form className="sign-in-form" onSubmit={onSignIn}>
              <label className="signin-label">User Name</label>
              <input
                className="signin-inputbox"
                required
                type="text"
                name="username"
                value={username}
                placeholder="Enter User Name"
                onChange={handleChange}
              />
              <label className="signin-label">Password</label>
              <input
                className="signin-inputbox"
                required
                name="password"
                value={password}
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
              {renderError()}
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
