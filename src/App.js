import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [snare, setInstrument] = useState('')

  useEffect(() => {})

  return (
    <div className='container'>
      <div>
        <div
          className='drum-piece'
          data-key='65'
          onClick={() => {
            console.log('click confirmed')
            setInstrument(
              <audio
                src='http://www.hazmatt.net/gaming/starcraft/terran/units/marine/tmardy00.wav'
                autoPlay
              />
            )
          }}>
          A {snare}
        </div>
        <div className='stitches-hook'>h</div>
      </div>
    </div>
  )
}

export default App
