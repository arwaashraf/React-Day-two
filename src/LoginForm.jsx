import React from "react";
import { useState } from "react";

function LoginForm() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setError] = useState({
    emailErr: "",
    passwordErr: "",
  });
  const [welcome, setWelcome] = useState(false);

  const changeData = (e) => {
    if (e.target.name === "email") {
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
      setError({
        ...errors,
        passwordErr:
          e.target.value.length === 0
            ? "This Field is Required"
            : e.target.value.length < 8
            ? "This Password Must be More Than 8 Numbers "
            : null,
      });
    }
  };
  const loginData = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(e.target, user);
    if (
      e.target[0].value === user.email &&
      e.target[1].value === user.password
    ) {
      console.log("Succeded");
      setWelcome(true);
    }
  };
  return (
    <>
      <form onSubmit={(e) => loginData(e)}>
        <div className="container my-5">
          <div className="form-group">
            <h2
              className="text-light text-center"
              style={{ fontSize: 44, fontStyle: "italic" }}
            >
              Login
            </h2>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
                name="email"
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
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
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
          </div>
          <button
            type="submit"
            className="btn btn-primary position-absolute bottom-20 start-50 translate-middle-x"
          >
            Login / SignIn
          </button>
        </div>
      </form>
      {welcome && <h3 className="text-center" style={{fontStyle:'italic'}}>Welcome To My Application</h3>}
      {/* {errors.emailErr == null && errors.passwordErr == null && !welcome && (
        <h3 className="text-center">Wrong</h3>
      )} */}
    </>
  );
}

export default LoginForm;
