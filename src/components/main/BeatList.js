import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from 'antd'
import BeatModal from './BeatModal'

const BeatList = ({ beats, addBeat, editBeat }) => {
  const [visible, setVisible] = useState(false)
  const [formRef, setFormRef] = useState(null)
  const [selectedBeat, setSelectedBeat] = useState(null)

  const measuredRef = useCallback(node => {
    if (node !== null) {
      setFormRef(node)
    }
  }, []);

  const changeModel = show => {
    setVisible(show);
  }

  const handleCreate = () => {
    const form = formRef
    form.validateFields((err, values) => {
      if (err) {
        return
      }

      console.log('Received values of form: ', values)
      if (!selectedBeat) addBeat(values)
      else editBeat({ prevBeat: selectedBeat, beat: values })
      form.resetFields()
      changeModel(false)
    })
  }

  return (
    <div className="main">
      <BeatModal
        ref={measuredRef}
        visible={visible}
        onCancel={() => changeModel(false)}
        onCreate={handleCreate}
        beat={selectedBeat}
      />
      {beats.map((beat, i) => (
        <Button className="box" key={i} onClick={() => { setSelectedBeat(beat); changeModel(true) }}>{beat.beatName}</Button>
      ))}
      <Button className="box add" onClick={() => { setSelectedBeat(null); changeModel(true) }}>
        <Icon type="form" />
      </Button>
    </div>
  )
}

BeatList.propTypes = {
  beats: PropTypes.arrayOf(
    PropTypes.shape({
      beatName: PropTypes.string.isRequired,
      ip: PropTypes.string.required,
      bpm: PropTypes.number.required
    }).isRequired
  ).isRequired
}

export default BeatList