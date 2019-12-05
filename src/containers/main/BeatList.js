import { connect } from 'react-redux'
import { addBeat, editBeat, deleteBeat } from '../../store/beat/actions'
import BeatList from '../../components/main/BeatList'

const mapStateToProps = state => ({
  beats: state.beats
})

const mapDispatchToProps = dispatch => ({
  addBeat: beat => dispatch(addBeat(beat)),
  editBeat: beat => dispatch(editBeat(beat)),
  deleteBeat: beat => dispatch(deleteBeat(beat))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeatList)