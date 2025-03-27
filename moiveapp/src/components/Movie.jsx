import { Link } from "react-router-dom";

export default function Movie({id, coverImg, title, genres}) {
  return (
    <div className="movie-card">
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt={title} />
      </Link>
      <div className="movie-card-title">
        <Link to={`/movie/${id}`}>{title}</Link>
      </div>
      <ul className="movie-card-genres">
        {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
      </ul>
    </div>
  );
}