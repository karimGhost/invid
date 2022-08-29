import { useEffect, useState } from "react";
import classes from "./Signup.module.css";

function Signup(props) {
  useEffect(() => {
    const container = document.querySelectorAll(".container_inputs");

    container.forEach((input) => {
      input.addEventListener("focusin", (e) =>
        document
          .querySelector(`label[for="${e.target.id}"]`)
          .classList.add("trans")
      );

      input.addEventListener("focusout", (e) =>
        e.target.value.length < 1
          ? document
              .querySelector(`label[for="${e.target.id}"]`)
              .classList.remove("trans")
          : null
      );
    });
  });

  function handleSubmit(e) {
    e.preventDefault();

    const pass1 = document.getElementById("password").value;
    const pass2 = document.getElementById("SecondPassword").value;

    const regex = /\W/.test(pass1);

    if (regex === false) {
      document.querySelector(".off").innerText =
        "password must include(a minimum of 1 numeric character [0-9] and. a minimum of 1 special character: ~`! @#$%^&*()-_+={}[]|;:<>,./? at least 1 upper case, numeric";
    } else {
      document.querySelector(".off").innerText = "";
    }

    if (pass1 !== pass2) {
      document.querySelector(".of").innerText = "passwords do not match";
    } else {
      document.querySelector(".of").innerText = "";
    }

    console.log(forms);
  }

  const [forms, setforms] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    password1: "",
    password2: "",
  });

  useEffect(() => {}, []);

  function check(event) {
    setforms((pre) => {
      return {
        ...pre,
        [event.target.name]: event.target.value,
      };
    });
  }

  function invalid() {
    alert("invalid!");
    props.exits();
  }

  return (
    <div className={classes.container_signup}>
      <span onClick={props.exits} className={classes.exit}>
        &times;
      </span>
      <span className="off"></span>
      <h1 className={classes.sign}>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div className={classes.container_twins}>
          <div id={classes.container_inputs} className="container_inputs">
            <label htmlFor="FirstName">
              FirstName <br></br>
            </label>

            <input
              type="text"
              onChange={check}
              value={forms.FirstName}
              name="FirstName"
              className={classes.input_}
              id="FirstName"
              autoComplete="off"
              required
            />
          </div>
          <div id={classes.container_inputs} className="container_inputs">
            <label htmlFor="LastName">LastName</label>
            <input
              type="text"
              onChange={check}
              value={forms.LastName}
              name="LastName"
              className={classes.input_}
              id="LastName"
              autoComplete="off"
              required
            />
          </div>
        </div>

        <div id={classes.container_inputs} className="container_inputs">
          <label htmlFor="Email">Email</label>
          <input
            type="Email"
            onChange={check}
            value={forms.email}
            name="email"
            className={classes.input_}
            id="Email"
            autoComplete="off"
            required
          />
        </div>

        <div className={classes.container_twins}>
          <div id={classes.container_inputs} className="container_inputs">
            <label htmlFor="password">
              Password <span className="of"></span>
            </label>
            <input
              type="password"
              onChange={check}
              value={forms.password1}
              name="password1"
              className={classes.input_}
              id="password"
              autoComplete="off"
              required
            />
          </div>

          <div id={classes.container_inputs} className="container_inputs">
            <label id={classes.small} htmlFor="SecondPassword">
              Repeat_Password
            </label>
            <input
              type="password"
              onChange={check}
              value={forms.password2}
              name="password2"
              className={classes.input_}
              id="SecondPassword"
              autoComplete="off"
              required
            />
          </div>
        </div>

        <button onClick={invalid} className={classes.submit}>
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
