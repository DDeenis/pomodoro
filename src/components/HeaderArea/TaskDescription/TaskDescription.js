import React from 'react';
import {number, func, string} from "prop-types";
import { TaskDescriptionWrapper, TaskDescriptionText } from './styled';

function TaskDescription({ styledHeight, expand, reset, defaultNotes, setNotes, saveNotes }) {
    return (
        <TaskDescriptionWrapper height={styledHeight} onMouseEnter={() => expand()} onMouseLeave={() => reset()}>
            <TaskDescriptionText defaultValue={defaultNotes} onChange={(e) => setNotes(e.target.value)} onBlur={() => saveNotes()} />
        </TaskDescriptionWrapper>
    );
}

TaskDescription.propTypes = {
    styledHeight: number,
    defaultNotes: string,
    setNotes: func,
    expand: func,
    reset: func,
    saveNotes: func
}

export default TaskDescription;