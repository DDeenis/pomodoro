import { actionTypes, clockStates } from "./actionCreators";

function formatTime(minutes, seconds) {
    if((minutes + '').length < 2) minutes = '0' + minutes;
    if((seconds + '').length < 2) seconds = '0' + seconds;

    return minutes + ':' + seconds;
}

function getSeconds(seconds) {
    return seconds % 60;
}

function getMinutes(seconds) {
    return Math.floor(seconds / 60);
}

const initialState = {
    timeLeftFormatted: formatTime(0, 0),
    clockState: clockStates.WORK,
    lastState: clockStates.REST,
    currentTime: 0
};

// const workTimeSeconds = 5;
// const restTimeSeconds = 3;
const workTimeSeconds = 1500;
const restTimeSeconds = 300;

function updateClock(state, time, currentState, lastState) {
    let newState = currentState;
    let newTime = time;
    const waitSeconds = currentState === clockStates.WORK ? workTimeSeconds : restTimeSeconds;

    if(time > waitSeconds) {
        newState = currentState === clockStates.WORK ? clockStates.REST : clockStates.WORK;
        newTime = 0;
    }

    return { 
        ...state, 
        timeLeftFormatted: formatTime(getMinutes(newTime), getSeconds(newTime)), 
        currentTime: newTime, 
        clockState: newState,
        lastState
    };
}

function changeClockState(state, newState) {
    return {...state, clockState: newState};
}

export default function clockReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_TIME:
            return updateClock(state, action.time, state.clockState);

        case actionTypes.CHANGE_CLOCK_STATE:
            return changeClockState(state, action.clockState);

        default:
            return state;
    }
}