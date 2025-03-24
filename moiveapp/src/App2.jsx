import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [ loading, setLoading ] = useState(true);
  const [ movies, setMovies ] = useState([]);

  // async - await
  const getMovies = async() => {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year');
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  } // -> 이걸 useEffect에 넣어서 렌더링 될때 한번만 getMovies라는 함수를 실행시켜야겠다

  useEffect(() => {
    getMovies();
  }, [])
  // console.log(movies); // 장르 받아올건데 장르가 배열로 되어있습니다.
  
  return (
    <div>
      {loading ? <h1>loading...⚙</h1> : 
        <div>{movies.map(movie => 
          <div key={movie.id}>
            <img src={movie.medium_cover_image} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <ul>
              {movie.genres.map((genre) => (<li key={genre}>{genre}</li>))}
            </ul>
          </div>
        )}</div>
      }
    </div>
  )
}
