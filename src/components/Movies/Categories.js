import classes from "./Categories.module.css";

function Categories(props) {
  return (
    <div className={classes.container_categories}>
      <div className={classes.Categories}>
        <ul className={classes.items}>
          <h1 onClick={props.colapse}>
            Categories <span className={classes.x}>&times;</span>
          </h1>
          <li>
            <a className="links" href="#Netflix Originals">
              {" "}
              NetflixOriginals
            </a>
          </li>
          <li>
            <a className="links" href="#Trending Now">
              TrendingNow
            </a>
          </li>
          <li>
            <a className="links" href="#Action Movies">
              ActionMovies
            </a>
          </li>
          <li>
            <a className="links" href="#Top_Rated Movies">
              TopRated
            </a>
          </li>
          <li>
            <a className="links" href="#Comedy">
              Comedy
            </a>
          </li>
          <li>
            <a className="links" href="#Romantic movies">
              Romantic
            </a>
          </li>
          <li>
            <a className="links" href="#Horor Movies">
              Horor
            </a>
          </li>
          <li>
            <a className="links" href="#Documentary">
              Documentary
            </a>
          </li>
          <li>
            <a className="links" href="#Trending Now">
              TrendingNow
            </a>
          </li>
          <li>
            <a className="links" href="#Action Movies">
              ActionMovies
            </a>
          </li>
          <li>
            <a className="links" href="#Top_Rated Movies">
              TopRated
            </a>
          </li>
          <li>
            <a className="links" href="#Comedy">
              Comedy
            </a>
          </li>
          <li>
            <a className="links" href="#Romantic movies">
              Romantic
            </a>
          </li>
          <li>
            <a className="links" href="#Horor Movies">
              Horor
            </a>
          </li>
          <li>
            <a className="links" href="#Documentary">
              Documentary
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Categories;
