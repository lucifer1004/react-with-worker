import React, {useEffect, useState} from 'react'
import worker from '../worker.js'
import WebWorker from '../workerSetup'

export default () => {
  const [time, setTime] = useState(Date.now())
  const [res, setRes] = useState(0)
  const [myWorker, setMyWorker] = useState(null)
  const handleClick = () => {
    for (let i = 0; i < 10000000; i++) {
      setTimeout(() => setRes(res => res + i), 50)
    }
  }

  const handleClickWorker = () => {}

  useEffect(() => {
    // setMyWorker(new WebWorker(worker))

    const interval = setInterval(() => {
      setTime(Date.now())
    }, 30)

    return () => {
      clearInterval(interval)
    }
  })

  return (
    <>
      <button onClick={handleClick}>local</button>
      <button onClick={handleClickWorker}>worker</button>
      <p>{time}</p>
      <p>{res}</p>
    </>
  )
}
