import { connect } from 'react-redux'
import { addBeat, editBeat } from '../../store/beat/actions'
import BeatList from '../../components/main/BeatList'

const mapStateToProps = state => ({
  beats: state.beats
})

const mapDispatchToProps = dispatch => ({
  addBeat: beat => dispatch(addBeat(beat)),
  editBeat: beat => dispatch(editBeat(beat))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeatList)