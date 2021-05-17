const CHANGE_WORK_TIME = 'CHANGE_WORK_TIME';
const CHANGE_REST_TIME = 'CHANGE_REST_TIME';

export const clockTimers = {
    workTimeSeconds: 1500,
    restTimeSeconds: 300
};

const initialState = {
    clockTimers
};

const changeWorkTime = (state, time) => ({ ...state, clockTimers: { ...state.clockTimers, workTimeSeconds: time } });
const changeRestTime = (state, time) => ({ ...state, clockTimers: { ...state.clockTimers, restTimeSeconds: time } });

function settingsReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_WORK_TIME:
            return changeWorkTime(state, action.time);

        case CHANGE_REST_TIME:
            return changeRestTime(state, action.time);

        default:
            return state;
    }
}

export default settingsReducer;

export const changeWorkTimeCreator = (time) => ({ type: CHANGE_WORK_TIME, time });
export const changeRestTimeCreator = (time) => ({ type: CHANGE_REST_TIME, time });
