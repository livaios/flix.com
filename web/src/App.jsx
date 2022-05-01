import './App.css'
import axios from 'axios'
import { useState } from 'react'
function App() {
	const [movies, setMovies] = useState(['loading...'])
	axios.get('http://localhost:5000/movies').then((res) => setMovies(res.data))
	return (
		<div className='App'>
			<h1>List of Movies</h1>
			{movies.map((name) => (
				<h3 key={name}>{name}</h3>
			))}
		</div>
	)
}

export default App
