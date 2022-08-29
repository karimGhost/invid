import { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import classes from "./components/Main.module.css";
import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import Carousel from "nuka-carousel/lib/carousel";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Routed(props) {
  const base_url = "https://image.tmdb.org/t/p/original/";

  const [trailerUrl, setTrailerUrl] = useState([]);

  const [animation, setAnimation] = useState(undefined);
  const [autoplay, setAutoplay] = useState(false);
  const [cellAlign, setCellAlign] = useState("left");
  const [cellSpacing, setCellSpacing] = useState(0);
  const [heightMode, setHeightMode] = useState("max");
  const [scrollMode, setScrollMode] = useState("remainder");
  const [slideIndex, setSlideIndex] = useState(0);
  const [slidesToScroll, setSlidesToScroll] = useState(1);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [transitionMode, setTransitionMode] = useState("scroll");
  const [underlineHeader, setUnderlineHeader] = useState(false);
  const [withoutControls, setWithoutControls] = useState(true);
  const [wrapAround, setWrapAround] = useState(false);
  const [zoomScale, setZoomScale] = useState(0.5);
  const [frameOverflow, setFrameOverflow] = useState("visible");
  const [slideWidth, setslideWidth] = useState(100);

  const [movies, setMovie] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const response = await axios.get(props.fetchUrl);

      setMovie(response.data.results);
      return response;
    }
    fetchdata();
  }, [props.fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters/
      autoplay: 1,
    },
  };

  const [move, setmovie] = useState(false);

  const handleClick = (movie) => {
    setmovie(true);

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
  };

  return (
    <div className="po">
      <h4
        id={props.title}
        className={!props.islargerow ? classes.titl : classes.title}
      >
        {" "}
        {props.title}
      </h4>

      <div className={classes.containe_Trendin}>
        <div className={classes.row}>
          {movies.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`image ${props.islargerow && "imagesmall"}`}
              src={`${base_url}${
                !props.islargerow ? movie.backdrop_path : movie.poster_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
      </div>

      <div className="fit">
        {trailerUrl && move ? <YouTube videoId={trailerUrl} opts={opts} /> : ""}
      </div>
    </div>
  );
}

export default Routed;
