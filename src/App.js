import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Accounts from "./components/Acc/Login";
import { useState } from "react";
import Signup from "./components/Acc/Signup";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Categories from "./components/Movies/Categories";
import classes from "./components/Main.module.css";
import Carousel from "nuka-carousel/lib/carousel";
import {
  FaHdd,
  FaHeart,
  FaHSquare,
  FaPlay,
  FaPlayCircle,
  FaRegHeart,
  FaStar,
} from "react-icons/fa";
import { useEffect } from "react";
import requests from "./requests";
import axios from "./axios";
import Routed from "./Routed";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
function App() {
  const [Moviedata, setMoviesdata] = useState([
    "/images/tom.jpg",
    "/images/bat.jpg)",
    "/images/bat.jpg",
  ]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  const [shows, handleShows] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShows(true);
      } else handleShows(false);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [shows]);

  const [fetched, setfetched] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      const response = await axios.get(requests.fetchTrending);
      response
        ? setTimeout(() => {
            setfile(false);
          }, "3000")
        : setfile(true);

      setfetched(response.data.results);
      return response;
    }
    fetchdata();
  }, [requests.fetchTrending]);

  console.log(fetched);

  const bg = {
    boxShadow: "inset 0px -20px 20px 0px #000000fc",
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const [movies, setMovie] = useState([]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters/
      autoplay: 1,
    },
  };

  const [trailerUrl, setTrailerUrl] = useState([]);

  const [origi, setorigi] = useState(true);
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }

    setorigi((pre) => !pre);
  };

  const style = {
    backgroundImage: `url("https//image.tmdb.org/t/p/original/${fetched.backdrop_path} )`,
    backgroundPosition: "center",
    width: "100%",
    height: "100vh",
  };

  const vv = fetched.map((v, index) => (
    <div key={v.id} className={classes.big_container_carousel}>
      {/* trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />*/}

      <img className="imgbi" src={`${base_url}${v.backdrop_path}`} />
      <div className="outs">
        {" "}
        {trailerUrl && !origi ? (
          <YouTube videoId={trailerUrl} opts={opts} />
        ) : !trailerUrl ? (
          <div className="imgspin">
            <img
              className="imgspinimg"
              src={process.env.PUBLIC_URL + "/images/spin.png"}
            />{" "}
          </div>
        ) : (
          ""
        )}{" "}
      </div>

      <div>
        <div className={classes.trends_h1}>
          <h1 className={classes.header}>{v.title || v.name}</h1>

          <div className={classes.row_Trends}>
            {" "}
            <span className={classes.hd}>HD</span>
            <br></br>
            <span>
              <span className={classes.star}>
                <FaStar />
                {v.vote_average}
              </span>{" "}
            </span>
            <br></br>
            <span>Mins1</span>
            <br></br>
            <span>type</span> <span>category</span>
          </div>

          <p className={classes.about}>{truncate(v?.overview, 400)}</p>

          <div className={classes.btn_trends}>
            <button
              onClick={() => handleClick(v)}
              className={classes.btn_watch}
            >
              <span className={classes.fa}>
                {" "}
                <FaPlayCircle />{" "}
              </span>{" "}
              Watch Now
            </button>{" "}
            <button className={classes.btn_Add}>
              <span className={classes.fa}>
                {" "}
                <FaRegHeart />
              </span>{" "}
              Add To Fav
            </button>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  ));

  const [accbox, SetaccBox] = useState(false);

  function Login() {
    SetaccBox(true);
  }

  function exit() {
    SetaccBox(false);
  }

  const [SignupBox, SetsignupBox] = useState(false);

  function signup() {
    SetsignupBox((pre) => !pre);
    SetaccBox(false);
  }

  function signupexit() {
    SetsignupBox(false);
  }

  const [colapse, setColapse] = useState(false);

  const bll = () => {};

  function collapse() {
    setColapse((pre) => !pre);
  }

  const val = new Date();

  const h = val.getFullYear();

  const [files, setfile] = useState(true);

  return (
    <BrowserRouter>
      {files && (
        <div className="load">
          {" "}
          <div
            className="Loads"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/images/logo/invid_logo.png"
              }) `,
            }}
          >
            {" "}
          </div>
        </div>
      )}

      {!files && (
        <div className="big">
          {accbox && <Accounts exits={exit} ext={accbox} />}

          <div onClick={accbox ? exit : bll}>
            {SignupBox && <Signup exits={signupexit} />}
            <Navbar
              shows={shows}
              col={colapse}
              colapse={collapse}
              signup={signup}
              Login={Login}
            />

            {colapse && <Categories colapse={collapse} />}
          </div>
        </div>
      )}
      {!files && (
        <Routes>
          <Route
            path="/"
            element={
              <Main
                handleClick={handleClick}
                origi={origi}
                title="Top_Rated Movies"
                fetch={vv}
              />
            }
          />
        </Routes>
      )}
      {!files && (
        <Routed
          title="Netflix Originals"
          islargerow={true}
          fetchUrl={requests.fetchNetflixOrignals}
        />
      )}

      {!files && (
        <Routed title="Trending Now" fetchUrl={requests.fetchTrending} />
      )}

      {!files && (
        <Routed title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      )}
      {!files && (
        <Routed title="Top_Rated Movies" fetchUrl={requests.fetchTopRated} />
      )}
      {!files && (
        <Routed title="Comedy" fetchUrl={requests.fetchComedymovies} />
      )}
      {!files && (
        <Routed
          title="Romantic movies"
          fetchUrl={requests.fetchRomanticmovies}
        />
      )}
      {!files && (
        <Routed title="Horor Movies" fetchUrl={requests.fetchHorormovies} />
      )}
      {!files && (
        <Routed title="Documentary" fetchUrl={requests.fetchDocumentaries} />
      )}
      {!files && (
        <footer className="footer">
          <span className="right"> Made By:Abdulkarim </span>
          <span className="copy"> invid &copy; {h}</span> <br></br>{" "}
        </footer>
      )}
    </BrowserRouter>
  );
}
export default App;
