import React from 'react'
import PropTypes from 'prop-types'

const Main = ({ beats, addBeat }) => {
  return (
    <div>
      {beats.map((beat, i) => (
        <div key={i}>{beat.id}</div>
      ))}
      <button onClick={() => addBeat({id:1})}>test</button>
    </div>
  )
}

Main.propTypes = {
  beats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  addBeat: PropTypes.func.isRequired
}

export default Main