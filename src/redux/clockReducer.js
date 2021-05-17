import { clockStates } from "./clockStates";
import {formatTime, getMinutes, getSeconds} from "./formatTime";
import { clockTimers } from "./settingsResucer";

const UPDATE_TIME = 'UPDATE_TIME';
const CHANGE_CLOCK_STATE = 'CHANGE_CLOCK_STATE';

const initialState = {
    timeLeftFormatted: formatTime(0, 0),
    clockState: clockStates.WORK,
    currentTime: 0
};

function updateClock(state, time, currentState) {
    let newState = currentState;
    let newTime = time;
    const waitSeconds = currentState === clockStates.WORK ? clockTimers.workTimeSeconds : clockTimers.restTimeSeconds;

    if(time > waitSeconds) {
        newState = currentState === clockStates.WORK ? clockStates.REST : clockStates.WORK;
        newTime = 0;
    }

    return { 
        ...state, 
        timeLeftFormatted: formatTime(getMinutes(newTime), getSeconds(newTime)), 
        currentTime: newTime, 
        clockState: newState
    };
}

function changeClockState(state, newState) {
    return {...state, clockState: newState};
}

export default function clockReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_TIME:
            return updateClock(state, action.time, state.clockState);

        case CHANGE_CLOCK_STATE:
            return changeClockState(state, action.clockState);

        default:
            return state;
    }
}

export const updateTimeCreator = (newTime) => ({ type: UPDATE_TIME, time: newTime });
export const changeClockStateCreator = (newState) => ({ type: CHANGE_CLOCK_STATE, clockState: newState });
