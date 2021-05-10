import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNotesCreator } from '../../../redux/actionCreators';
import TaskDescription from './TaskDescription';

function TaskDescriptionContainer() {
    const { defaultHeight, notes: defaultNotes } = useSelector(state => state.header);
    const dispatch = useDispatch();

    const [styledHeight, setStyledHeight] = useState(defaultHeight);
    const [notes, setNotes] = useState(defaultNotes);

    const expand = useCallback(() => setStyledHeight(defaultHeight * 3), [defaultHeight]);
    const reset = useCallback(() => setStyledHeight(defaultHeight), [defaultHeight]);

    const saveNotes = () => {
        dispatch(setNotesCreator(notes));
        console.log(notes)
    }

    return (
        <TaskDescription
            styledHeight={styledHeight}
            defaultNotes={notes}
            expand={expand}
            reset={reset}
            setNotes={setNotes}
            saveNotes={saveNotes}
        />
    );
}

export default TaskDescriptionContainer;