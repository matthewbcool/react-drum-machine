import React, { useState } from 'react'
import './App.css'

function App() {
  // Declare a new state variable, which we'll call "count"
  //const initialState = 'a'
  // const [keyPlayed, playSound] = useState(initialState)

  return (
    <div className='container'>
      <div
        onClick={() => {
          return <audio ref='audio_tag' src='sounds/clap.wav' autoPlay />
        }}>
        <div className='drum-piece' data-key='65'>
          A
        </div>
      </div>
    </div>
  )
}

export default App
