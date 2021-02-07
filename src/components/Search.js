import { useState, useEffect } from "react"
import axios from 'axios'

const Search = () => {
  const [term, setTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(term)
  const [results, setResults] = useState([])

  // Reset timer at every change in term. 
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term)
    }, 600)

    return () => {
      clearTimeout(timerId)
    }
  }, [term])

  // Res from api. Outputs debounced Term
  //(makes a request each time the term changes and does not change if term is the same. When user types a word and wait 0.6 s it makes the request)
  useEffect(() => {
    const searchWiki = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      })
      setResults(data.query.search);
    }
    if (debouncedTerm) {
      searchWiki();
    }
    return () => {
      
    }
  }, [debouncedTerm])

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a 
          href={`https://en.wikipedia.org?curid=${result.pageid}`} 
          className="ui button">Go</a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input 
          value={term}
          onChange={(e) => setTerm(e.target.value)} 
          className="input" 
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  )
}

export default Search