import React from "react";
import { useState } from "react";

function RegisterForm() {
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setError] = useState({
    nameErr: "",
    usernameErr: "",
    emailErr: "",
    passwordErr: "",
    confirmPasswordErr: "",
  });

  const changeData = (e) => {
    if (e.target.name === "name") {
      setUserData({
        ...userData,
        name: e.target.value,
      });
      setError({
        ...errors,
        nameErr: e.target.value.length === 0 ? "This Field is Required" : null,
      });
    } else if (e.target.name === "username") {
      setUserData({
        ...userData,
        username: e.target.value,
      });
      var regExUsername = new RegExp(/(\s)/g);
      var validUser = regExUsername.test(e.target.value);
      setError({
        ...errors,
        usernameErr:
          e.target.value.length === 0
            ? "This Field is Required"
            : validUser
            ? "User Name must not contain any spaces"
            : null,
      });
    } else if (e.target.name === "email") {
      setUserData({
        ...userData,
        email: e.target.value,
      });
      var regExUseremail = new RegExp(/^[a-z|0-9]{2,}\@[a-z]{3,}\.(com|net)$/);
      var validEmail = regExUseremail.test(e.target.value);
      setError({
        ...errors,
        emailErr:
          e.target.value.length === 0
            ? "This Field is Required"
            : !validEmail
            ? "Please Enter Valid Email"
            : null,
      });
    } else if (e.target.name === "password") {
      setUserData({
        ...userData,
        password: e.target.value,
      });
      var regExUserpass = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      );
      var validPass = regExUserpass.test(e.target.value);
      setError({
        ...errors,
        passwordErr:
          e.target.value.length === 0
            ? "This Field is Required"
            : !validPass
            ? "Password Should Contains Characters , Numbers and Special Character"
            : null,
      });
    } else if (e.target.name === "confirmPassword") {
      setUserData({
        ...userData,
        confirmPassword: e.target.value,
      });
      setError({
        ...errors,
        confirmPasswordErr:
          e.target.value.length === 0
            ? "This Field is Required"
            : userData.password !== e.target.value
            ? "Password Do not Match"
            : null,
      });
    }
  };
  const submitData = (e) => {
    console.log("userData");
    localStorage.setItem("user", JSON.stringify(userData));
  };
  const [showPassword, setPassword] = useState(false);
  const toggled = () => {
    setPassword(!showPassword);
  };
  return (
    <form onSubmit={(e) => submitData(e)}>
      <div className="container my-5">
        <div className="form-group">
          <h2
            className="text-light text-center"
            style={{ fontSize: 44, fontStyle: "italic" }}
          >
            Register
          </h2>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="UserName"
              name="name"
              value={userData.name}
              onChange={(e) => changeData(e)}
            />
            <label>Name</label>
            <div
              className="text-primary"
              style={{ fontFamily: "bold", fontSize: 20 }}
            >
              {errors.nameErr}
            </div>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="UserName"
              name="username"
              value={userData.username}
              onChange={(e) => changeData(e)}
            />
            <label>User Name</label>
            <div
              className="text-primary"
              style={{ fontFamily: "bold", fontSize: 20 }}
            >
              {errors.usernameErr}
            </div>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              name="email"
              value={userData.email}
              onChange={(e) => changeData(e)}
            />
            <label>Email address</label>
            <div
              className="text-primary"
              style={{ fontFamily: "bold", fontSize: 20 }}
            >
              {errors.emailErr}
            </div>
          </div>
          <div className="form-floating mb-3">
            <input
              type={showPassword ? "text" : "password"}
              value={userData.password}
              className="form-control"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={(e) => changeData(e)}
            />
            <label>Password</label>
            <div
              className="text-primary"
              style={{ fontFamily: "bold", fontSize: 20 }}
            >
              {errors.passwordErr}
            </div>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={userData.confirmPassword}
              onChange={(e) => changeData(e)}
            />
            <label>Confirm Password</label>
            <div
              className="text-primary"
              style={{ fontFamily: "bold", fontSize: 20 }}
            >
              {errors.confirmPasswordErr}
            </div>
          </div>
          <div className="mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              onClick={toggled}
            />
            <label className="form-check-label mx-1">Show Password</label>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-lg position-absolute bottom-20 start-50 translate-middle-x"
          disabled={
            errors.nameErr ||
            errors.usernameErr ||
            errors.emailErr ||
            errors.passwordErr ||
            errors.confirmPasswordErr
          }
        >
          Registration
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
