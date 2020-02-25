import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [ quote, setQuote ] = useState('')

	useEffect(() => {
		const fetchQuote = () => {
			fetch('https://simple-quotes.herokuapp.com/quote')
				.then(res => {
					return res.json()
				})
				.then(json => {
					console.log({quote: json.data.quote})
					setQuote(`${json.data.quote} - ${json.data.author}`)
				})
		}
		fetchQuote()
	}, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
				<h4>{quote}</h4>
      </header>
    </div>
  );
}

async function getQuote() {
	const res = await fetch('https://simple-quotes.herokuapp.com/quote')
	console.logo({res})
	return res
}

export default App;
