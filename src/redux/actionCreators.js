export const actionTypes = Object.freeze({
    UPDATE_TIME: 'UPDATE_TIME',
    CHANGE_CLOCK_STATE: 'CHANGE_CLOCK_STATE',
    CHANGE_PROGRESS_BAR_STATE: 'CHANGE_PROGRESS_BAR_STATE',
    SET_TOMATOES_FULL: 'SET_TOMATOES_FULL',
    SET_TOMATO_SLICES: 'SET_TOMATO_SLICES',
    SET_NOTES: 'SET_NOTES',
    ON_STOP_ASYNC: 'ON_STOP_ASYNC'
});

export const clockStates = Object.freeze({
    WORK: 'work',
    REST: 'rest',
    PAUSE: 'pause',
    STOP: 'stop'
});

export const updateTimeCreator = (newTime) => ({
    type: actionTypes.UPDATE_TIME,
    time: newTime
});

export const changeClockStateCreator = (newState) => ({
    type: actionTypes.CHANGE_CLOCK_STATE,
    clockState: newState
});

export const changeProgressBarCreator = (width) => ({
    type: actionTypes.CHANGE_PROGRESS_BAR_STATE,
    width
});

export const setTomatoesFullCreator = (newValue) => ({
    type: actionTypes.SET_TOMATOES_FULL,
    newValue
});

export const setTomatoSlicesCreator = (newValue) => ({
    type: actionTypes.SET_TOMATO_SLICES,
    newValue
});

export const onStopAsyncCreator = () => ({
    type: actionTypes.ON_STOP_ASYNC
});

export const setNotesCreator = (notes) => ({
    type: actionTypes.SET_NOTES,
    notes
});