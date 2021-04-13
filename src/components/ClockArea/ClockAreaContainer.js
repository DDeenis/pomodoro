import { connect } from "react-redux";
import { changeClockStateCreator, clockStates } from "../../redux/actionCreators";
import ClockArea from "./ClockArea";

function mapStateToProps(state) {
    return ({
        currentState: state.clock.clockState
    });
}

function mapDispatchToProps(dispatch) {
    return ({
        onStop: () => {
            dispatch(changeClockStateCreator(clockStates.STOP))
        },
        onPause: () => {
            dispatch(changeClockStateCreator(clockStates.PAUSE))
        },
        onStart: () => {
            // CHANGE THIS
            dispatch(changeClockStateCreator(clockStates.WORK))
        }
    });
}

const ClockAreaContainer = connect(mapStateToProps, mapDispatchToProps)(ClockArea);

export default ClockAreaContainer;