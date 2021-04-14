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
    currentTime: 0
};

const workTimeSeconds = 5;
const restTimeSeconds = 3;
// const workTimeSeconds = 1500;
// const restTimeSeconds = 300;

function updateTime(state, newTime) {
    let newState = '';

    // if(newTime < workTimeSeconds && state.clockState === clockStates.WORK) {
    //     newState = clockStates.WORK;
    // } else {
    //     newState = clockStates.REST;
    // }

    console.log(newTime)
    console.log(state.clockState)
    if(newTime >= workTimeSeconds && state.clockState === clockStates.WORK) {
        newState = clockStates.REST;
    } else {
        newState = clockStates.WORK;
    }

    let resetTime = newTime;

    if((newTime >= workTimeSeconds && state.clockState === clockStates.WORK)
        || (newTime >= restTimeSeconds && state.clockState === clockStates.REST)) {
        resetTime = 0;
    }

    return {...state, timeLeftFormatted: formatTime(getMinutes(newTime), getSeconds(newTime)), currentTime: resetTime, clockState: newState};
}

function changeClockState(state, newState) {
    return {...state, clockState: newState};
}

export default function clockReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_TIME:
            return updateTime(state, action.time);

        case actionTypes.CHANGE_CLOCK_STATE:
            return changeClockState(state, action.clockState);

        default:
            return state;
    }
}