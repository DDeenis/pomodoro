import { connect } from "react-redux";
import { changeClockStateCreator, updateTimeCreator } from "../../../redux/actionCreators";
import Clock from "./Clock";

function mapStateToProps(state) {
    return ({
        clockState: state.clock.clockState,
        timeLeft: state.clock.timeLeftFormatted
    });
}

function mapDispatchToProps(dispatch) {
    return ({
        updateTime: (newTime) => {
            dispatch(updateTimeCreator(newTime));
        },
        changeClockState: (newState) => {
            dispatch(changeClockStateCreator(newState));
        }
    });
}

const ClockContainer = connect(mapStateToProps, mapDispatchToProps)(Clock);

export default ClockContainer;