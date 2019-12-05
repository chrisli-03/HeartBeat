export const ADD_BEAT = 'ADD_BEAT'
export const EDIT_BEAT = 'EDIT_BEAT'
export const DELETE_BEAT = 'DELETE_BEAT'

export function addBeat(beat) {
  return {
    type: ADD_BEAT,
    payload: beat
  }
}

export function editBeat(beat) {
  return {
    type: EDIT_BEAT,
    payload: beat
  }
}

export function deleteBeat(beat) {
  return {
    type: DELETE_BEAT,
    payload: beat
  }
}