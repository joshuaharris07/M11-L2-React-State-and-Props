import { useState } from 'react';
import Task1 from './components/Task1'
import MoviesList from './components/MoviesList'
import './App.css'

const App = () => {
  return (
    <div>
      <Task1 />
      <MoviesList />
    </div>
  );
}
;
export default App