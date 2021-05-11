import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNotesCreator } from '../../../redux/actionCreators';
import TaskDescription from './TaskDescription';

function TaskDescriptionContainer() {
    const { defaultHeight, notes: defaultNotes } = useSelector(state => state.header);
    const dispatch = useDispatch();

    const [styledHeight, setStyledHeight] = useState(defaultHeight);
    const [notes, setNotes] = useState(defaultNotes);
    const [isEditing, setIsEditing] = useState(false);

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
            isEditing={isEditing}
            expand={expand}
            reset={reset}
            setNotes={setNotes}
            saveNotes={saveNotes}
            setIsEditing={setIsEditing}
        />
    );
}

export default TaskDescriptionContainer;