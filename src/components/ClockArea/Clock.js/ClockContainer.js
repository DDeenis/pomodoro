import { connect } from "react-redux";
import { updateTimeCreator } from "../../../redux/actionCreators";
import Clock from "./Clock";

function mapStateToProps(state) {
    return ({
        clockState: state.clock.clockState,
        timeLeft: state.clock.timeLeftFormatted,
        currentTime: state.clock.currentTime
    });
}

function mapDispatchToProps(dispatch) {
    return ({
        updateTime: (newTime) => {
            dispatch(updateTimeCreator(newTime));
        }
    });
}

const ClockContainer = connect(mapStateToProps, mapDispatchToProps)(Clock);

export default ClockContainer;