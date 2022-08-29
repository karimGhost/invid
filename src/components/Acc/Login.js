import { useState } from "react";
import { useEffect } from "react";
import classes from "./Login.module.css";

function Accounts(props) {
  useEffect(() => {
    const single = document.querySelectorAll(".container_inputs");

    single.forEach((input) => {
      input.addEventListener("focusin", (e) =>
        document
          .querySelector(`label[for='${e.target.id}']`)
          .classList.add("tran")
      );

      input.addEventListener(
        "focusout",

        (e) =>
          e.target.value.length < 1
            ? document
                .querySelector(`label[for='${e.target.id}']`)
                .classList.remove("tran")
            : null
      );
    });
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  function log() {
    alert("error!");
    props.exits();
  }

  return (
    <div className="acc_container">
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.acc}>
          <span onClick={props.exits} className="exit">
            &times;
          </span>
          <h1>Login</h1>

          <div className="container_inputs">
            <label htmlFor="username">user</label>
            <input
              className={classes.input_}
              type="text"
              id="username"
              autoComplete="off"
              required
            />
          </div>

          <div className="container_inputs">
            <label htmlFor="password">Password </label>
            <input
              className={classes.input_}
              type="password"
              id="password"
              autoComplete="off"
              required
            />
          </div>
          <button onClick={log} type="submit" className="btn_submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Accounts;
