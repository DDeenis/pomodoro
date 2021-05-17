const SET_TOMATOES_FULL = 'SET_TOMATOES_FULL';
const SET_TOMATO_SLICES = 'SET_TOMATO_SLICES';
const SET_NOTES = 'SET_NOTES';

const initialState = {
    tomatoesFull: 0,
    tomatoSlices: 0,
    notes: '',
    defaultHeight: 78
};

const setTomatoesFull = (state, newValue) => ({ ...state, tomatoesFull: newValue });
const setTomatoSlices = (state, newValue) => ({ ...state, tomatoSlices: newValue });
const setNotes = (state, notes) => ({ ...state, notes });

export default function headerReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TOMATOES_FULL:
            return setTomatoesFull(state, action.newValue);

        case SET_TOMATO_SLICES:
            return setTomatoSlices(state, action.newValue);

        case SET_NOTES:
            return setNotes(state, action.notes);
    
        default:
            return state;
    }
}

export const setTomatoesFullCreator = (newValue) => ({ type: SET_TOMATOES_FULL, newValue });
export const setTomatoSlicesCreator = (newValue) => ({ type: SET_TOMATO_SLICES, newValue });
export const setNotesCreator = (notes) => ({ type: SET_NOTES, notes });
