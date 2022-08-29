import {
  FaHdd,
  FaHeart,
  FaHSquare,
  FaPlay,
  FaPlayCircle,
  FaRegHeart,
  FaStar,
} from "react-icons/fa";
import classes from "./Main.module.css";
import Carousel from "nuka-carousel/lib/carousel";
import { useState, useEffect } from "react";
import axios from "axios";
const Main = (props) => {
  const [animation, setAnimation] = useState(undefined);
  const [autoplay, setAutoplay] = useState(props.origi);
  const [cellAlign, setCellAlign] = useState("left");
  const [cellSpacing, setCellSpacing] = useState(0);
  const [heightMode, setHeightMode] = useState("max");
  const [scrollMode, setScrollMode] = useState("remainder");
  const [slideIndex, setSlideIndex] = useState(0);
  const [slidesToScroll, setSlidesToScroll] = useState(1);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [transitionMode, setTransitionMode] = useState("scroll");
  const [underlineHeader, setUnderlineHeader] = useState(false);
  const [withoutControls, setWithoutControls] = useState(false);
  const [wrapAround, setWrapAround] = useState(true);
  const [zoomScale, setZoomScale] = useState(0.5);
  const [frameOverflow, setFrameOverflow] = useState("hidden");

  return (
    <main>
      <div className={classes.container_movies}>
        <div className={classes.bigi}>
          <Carousel
            frameOverflow={frameOverflow}
            cellSpacing={cellSpacing}
            animation={animation}
            autoplay={props.origi}
            cellAlign={cellAlign}
            heightMode={heightMode}
            scrollMode={scrollMode}
            slideIndex={slideIndex}
            slidesToScroll={slidesToScroll}
            slidesToShow={slidesToShow}
            transitionMode={transitionMode}
            withoutControls={withoutControls}
            wrapAround={wrapAround}
            renderAnnounceSlideMessage={({ currentSlide, slideCount }) => {
              return `Showing slide ${currentSlide} of ${slideCount}`;
            }}
            defaultControlsConfig={{
              nextButtonText: "N>",
              nextButtonTextStyle: {
                borderRadius: "40px",
              },
              prevButtonText: "<P",
              pagingDotsStyle: {
                fill: "red",
                width: "20px",
                size: "40px",
                height: "40px",
                cx: "4",
                cy: "5",
              },
            }}
          >
            {props.fetch}
          </Carousel>
        </div>
      </div>
    </main>
  );
};
export default Main;
