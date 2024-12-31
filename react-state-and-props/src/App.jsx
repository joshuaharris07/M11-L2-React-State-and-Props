import { useState } from 'react';
import Task1 from './components/Task1'
import MoviesList from './components/MoviesList'
import './App.css'

const App = () => {
  // const [showMovies, setShowMovies] = useState(true)
  // const movies = useState(['The Lord of the Rings', 'Star Wars', 'Moana'])



  return (
    <div>
      <Task1 />
      <MoviesList />
      {/* {showMovies && <MoviesList items={movies} />} */}
    </div>
  );
}
;
export default App