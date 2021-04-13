const actionTypes = Object.freeze({
    UPDATE_TIME: 'UPDATE_TIME',
    CHANGE_CLOCK_STATE: 'CHANGE_CLOCK_STATE'
});

const clockStates = Object.freeze({
    WORK: 'work',
    REST: 'rest',
    PAUSE: 'pause',
    STOP: 'stop'
});

function updateTimeCreator(newTime) {
    return ({
        type: actionTypes.UPDATE_TIME,
        time: newTime
    });
}

function changeClockStateCreator(newState) {
    return ({
        type: actionTypes.CHANGE_CLOCK_STATE,
        clockState: newState
    });
}

export {
    actionTypes,
    clockStates,
    updateTimeCreator,
    changeClockStateCreator
}