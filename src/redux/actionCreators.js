const actionTypes = Object.freeze({
    UPDATE_TIME: 'UPDATE_TIME',
    CHANGE_CLOCK_STATE: 'CHANGE_CLOCK_STATE',
    CHANGE_PROGRESS_BAR_STATE: 'CHANGE_PROGRESS_BAR_STATE'
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

function changeProgressBarCreator(width, clockState) {
    return ({
        type: actionTypes.CHANGE_PROGRESS_BAR_STATE,
        clockState,
        width
    });
}

export {
    actionTypes,
    clockStates,
    updateTimeCreator,
    changeClockStateCreator,
    changeProgressBarCreator
}