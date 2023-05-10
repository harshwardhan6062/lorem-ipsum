import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { nanoid } from 'nanoid'
import data from './data.js'

function App() {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  }

  return (
    <section className='section-center'>
      <h4>TIRED OF BORING LOREM IPSUM</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraphs:</label>
        <input type='number' id='amount' value={count} name='amount' min='1' max='8' step='1' onChange={(e) => setCount(e.target.value)}/>
        <button className='btn' type='submit'>Generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item) => {
          return <p key={nanoid()}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App
