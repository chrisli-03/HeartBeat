import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
const Store = window.require('electron-store')
const store = new Store()

const Beat = () => {
  const [beatStatus, setBeatStatus] = useState(0)
  const [color, setColor] = useState('red')
  const statusClass = ['', 'right', 'no-animation']
  const { ip } = useParams()
  const beat = store.get('beats').filter(n => n.ip === ip)[0]

  useEffect(() => {
    let prevCompleted = true
    const interval = setInterval(() => {
      if (!prevCompleted) return
      prevCompleted = false
      setBeatStatus(1)
      setTimeout(() => {
        fetch(`https://${beat.ip}`)
          .then(response => {
            if (response.status < 400) {
              setBeatStatus(0)
              setColor('#1890ff')
            }
            else {
              setBeatStatus(2)
              setColor('#777')
            }
          })
          .catch(err => {
            setBeatStatus(2)
            setColor('#777')
          })
          .finally(() => {
            prevCompleted = true
          })
      }, 500)
    }, 60000 / beat.bpm)
    return () => {
      clearInterval(interval)
    }
  })

  return (
    <div className="beat" style={{ borderColor: color }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
        <polyline
          className={ `beatLine ${statusClass[beatStatus]}` }
          points="-150 50 80 50 85 40 90 55 98 20 105 70 110 45 115 50 120 30 125 55 130 45 135 50 350 50"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="square"
          fill="none"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default Beat