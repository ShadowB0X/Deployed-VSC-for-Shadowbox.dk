
import { useState, useEffect } from 'react'
import './style.css' // We'll define this next

// Images
import logo from '../assets/newlogo.svg'
import play from '../assets/play.svg'
import pause from '../assets/pause.svg'
import reset from '../assets/reset.svg'
import coffee0 from '../assets/coffeecup_empty.svg'
import coffee25 from '../assets/coffeecup_25.svg'
import coffee50 from '../assets/coffeecup_50.svg'
import coffee75 from '../assets/coffeecup_75.svg'
import coffee100 from '../assets/coffeecup_100.svg'



const cups = [coffee0, coffee25, coffee50, coffee75, coffee100]

function Timer() {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [time, setTime] = useState(0)
  const [totalTime, setTotalTime] = useState(0)
  const [currentCup, setCurrentCup] = useState(4)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    let interval = null

    function calcRemainingTime() {
      const remainingTime = (time / totalTime) * 100
      if (remainingTime > 75.0) return 4
      if (remainingTime > 50.0) return 3
      if (remainingTime > 25.0) return 2
      if (remainingTime > 0.0) return 1
      return 0
    }

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1)
        const remainingTime = calcRemainingTime()
        if (remainingTime !== currentCup) {
          setCurrentCup(remainingTime)
        }
      }, 1000)
    } else if (isActive && time === 0) {
      clearInterval(interval)
      setCurrentCup(0)
      setIsActive(false)
    }
    return () => clearInterval(interval)
  }, [isActive, time, currentCup, totalTime])

  const startTimer = () => {
    setIsActive(true)
    if (time === 0) {
      const newTime = minutes * 60 + seconds
      setTime(newTime)
      setTotalTime(newTime)
    }
  }

  const pauseTimer = () => setIsActive(false)

  const resetTimer = () => {
    setIsActive(false)
    setTime(0)
    setMinutes(0)
    setSeconds(0)
  }

  const fixTimer = (min) => {
    const newTime = min * 60
    setMinutes(min)
    setSeconds(0)
    setIsActive(true)
    setTime(newTime)
    setTotalTime(newTime)
  }

  const formatTime = (t) => {
    let m = Math.floor(t / 60)
    let s = t % 60
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  return (
    <div className={`wrapper ${darkMode ? 'dark' : 'light'}`}>
      <button className='theme-toggle' onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      <div className='container'>
        <img className='logo' width='100' src={logo} />
        <h1>Coffee timer</h1>

        <img className='coffeecup' width='100' src={cups[currentCup]} />

        <div className='remaining-time'>{formatTime(time)}</div>

        <div className='timer-controls'>
          <div className='play-buttons'>
            {isActive ? (
              <button className='btn' onClick={pauseTimer}>
                <img src={pause} alt='Pause' width='32' height='32' />
              </button>
            ) : (
              <button className='btn' onClick={startTimer}>
                <img src={play} alt='Start' width='32' height='32' />
              </button>
            )}
            <button className='btn' onClick={resetTimer}>
              <img src={reset} alt='Reset' width='20' height='20' />
            </button>
          </div>
          <div className='input-boxes'>
            <div className='time-input'>
              <label>Minutes</label>
              <input
                type='number'
                min={0}
                max={59}
                value={minutes}
                onChange={(e) => setMinutes(parseInt(e.target.value))}
              />
            </div>
            <div className='time-input'>
              <label>Seconds</label>
              <input
                type='number'
                min={0}
                max={59}
                value={seconds}
                onChange={(e) => setSeconds(parseInt(e.target.value))}
              />
            </div>
          </div>
        </div>

        <div className='buttons'>
          {[5, 10, 15].map((min) => (
            <button key={min} className='btn' onClick={() => fixTimer(min)}>
              {min} mins
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Timer