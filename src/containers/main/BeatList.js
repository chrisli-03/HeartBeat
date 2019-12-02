import { connect } from 'react-redux'
import { addBeat } from '../../store/beat/actions'
import BeatList from '../../components/main/BeatList'

const mapStateToProps = state => ({
  beats: state.beats
})

const mapDispatchToProps = dispatch => ({
  addBeat: beat => dispatch(addBeat(beat))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeatList)