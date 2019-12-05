import React, { useEffect } from 'react'

const Beat = ({ beat }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(beat)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  })

  return (
    <div>{ beat.beatName }</div>
  )
}

export default Beat