import { connect } from 'react-redux'
import { addBeat } from '../../store/beat/actions'
import Main from '../../components/main/Main'

const mapStateToProps = state => ({
  beats: state.beats
})

const mapDispatchToProps = dispatch => ({
  addBeat: beat => dispatch(addBeat(beat))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main)