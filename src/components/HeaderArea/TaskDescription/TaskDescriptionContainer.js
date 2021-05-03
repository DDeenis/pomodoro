import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import TaskDescription from './TaskDescription';
import {getLocalNotes, setLocalNotes} from "../../../redux/localStorageApi";

function TaskDescriptionContainer() {
    const { defaultHeight } = useSelector(state => state.header);
    const [styledHeight, setStyledHeight] = useState(defaultHeight);

    const expand = useCallback(() => setStyledHeight(defaultHeight * 3), [defaultHeight]);
    const reset = useCallback(() => setStyledHeight(defaultHeight), [defaultHeight]);

    const defaultNotes = getLocalNotes();
    const setNotes = (e) => setLocalNotes(e.target.value);

    return (
        <TaskDescription
            styledHeight={styledHeight}
            defaultNotes={defaultNotes}
            expand={expand}
            reset={reset}
            setNotes={setNotes}
        />
    );
}

export default TaskDescriptionContainer;