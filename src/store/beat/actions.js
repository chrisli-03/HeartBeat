export const ADD_BEAT = 'ADD_BEAT'

export function addBeat(beat) {
  return {
    type: ADD_BEAT,
    payload: beat
  }
}