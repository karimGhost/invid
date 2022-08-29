import classes from "./Navbar.module.css";
import {
  FaSearch,
  FaResearchgate,
  FaSearchPlus,
  FaSearchDollar,
  FaArrowDown,
  FaArrowAltCircleDown,
  FaRegCaretSquareDown,
  FaLongArrowAltDown,
  FaArrowAltCircleUp,
  FaRegCaretSquareUp,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
function Navbar(props) {
  const [openNav, SetopenNav] = useState(false);

  const val = document.getElementById("Nav");
  const [vv, setvv] = useState(false);

  function cli() {
    if (val.value.length == 1 || val.length > 1) {
      setvv(true);
    } else if (val.value.length == 0) {
      setvv(false);
    }
  }

  function search() {
    alert("Sorry No Data");
  }

  function click() {
    SetopenNav((pre) => !pre);
  }

  const searchopen = {
    padding: !openNav ? "0px" : "10px",
    maxWidth: !openNav ? "" : "100px",
    minWidth: !openNav ? "" : "140px",
    transform: openNav ? "none" : "translate(140px)",
    transitionDuration: "1s",
    height: "40px",
  };
  const searchbtn = {
    content: "k",
  };

  //Drawer//

  const [drawer, setdrawer] = useState(false);

  function opendrawer() {
    setdrawer((pre) => !pre);
    SetopenNav(!true);
  }

  const sty = {
    trasitionDelay: "4s",
    transitionDuration: "1s",
    width: !drawer ? "" : "50%",
    borderTopLeftRadius: !drawer ? "200%" : "0",

    borderBottomLeftRadius: !drawer ? "200%" : "30px",
    // transform: drawer ? "scale(0)" : "",
  };

  const [skew, setskew] = useState(false);
  function skews() {
    setskew((pre) => !pre);
  }

  const colapse = () => {
    props.colapse();

    opendrawer();
  };

  const ske = {
    transform: !skew && "rotate(40deg)",
  };
  const sets = {
    transform: skew && "rotate(80deg)",
    trasitionDelay: skew && "2s",
    fontStyle: skew && "italic",
  };

  const [arrow, setarrow] = useState(false);

  function down() {
    setarrow(true);
  }

  const up = () => {
    setarrow(false);
  };
  const sho = !props.shows;

  return (
    <div
      className={
        !props.shows ? classes.Navbar_container : classes.Navbar_container_black
      }
    >
      <div className={classes.Navbar_header}>
        <span className={classes.Navbar_image}>
          <img
            width={100}
            height={100}
            src={process.env.PUBLIC_URL + "/images/logo/invid_logo.png"}
          />{" "}
        </span>
        <div className={classes.accounts}>
          {" "}
          <span onClick={props.Login} className={classes.logins}>
            Login
          </span>
          /
          <span onClick={props.signup} className={classes.signups}>
            Signup
          </span>
        </div>

        <div
          id={!openNav ? classes.over : ""}
          className={classes.Navbar_search}
        >
          <input
            onChange={cli}
            id="Nav"
            style={searchopen}
            className={classes.Navbar_input}
            type="search"
          />
          {vv && openNav ? (
            <button
              onClick={search}
              id={openNav ? classes.show : ""}
              style={searchbtn}
              className={classes.Navbar_button_input}
              type="button"
            >
              <FaSearch />{" "}
            </button>
          ) : (
            <button
              id={!openNav ? classes.sea : ""}
              style={searchbtn}
              className={classes.Navbar_button_input}
              type="button"
              onClick={click}
            >
              {openNav ? (
                <span id={classes.f} className="times">
                  &times;
                </span>
              ) : (
                <span id={classes.fa} className="">
                  {" "}
                  <FaSearch />{" "}
                </span>
              )}{" "}
            </button>
          )}
        </div>
      </div>

      {/* Drawer section */}
      <button className={classes.ope} onClick={opendrawer}>
        {" "}
        {drawer ? (
          <span style={sets} onClick={skews} className={classes.times}>
            &times;
          </span>
        ) : (
          <span style={ske}>&#9776;</span>
        )}
      </button>
      <div style={sty} className={classes.drawer}>
        <ul className={classes.drawer_ul}>
          <NavLink className={classes.NavLink} to="/">
            Home
          </NavLink>
          <NavLink className={classes.NavLink} to="">
            Movies
          </NavLink>
          <NavLink
            onClick={colapse}
            className={classes.NavLink}
            to=""
            onMouseEnter={down}
            onMouseLeave={up}
          >
            Categories
            <span className={classes.Down}>
              {" "}
              {arrow ? (
                <span className={classes.ora}>
                  <FaRegCaretSquareUp />
                </span>
              ) : props.col ? (
                <span className={classes.ora}>
                  {" "}
                  <FaRegCaretSquareUp />{" "}
                </span>
              ) : (
                <FaRegCaretSquareDown />
              )}{" "}
            </span>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
