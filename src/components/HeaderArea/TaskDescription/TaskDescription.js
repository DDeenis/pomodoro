import React from 'react';
import {number, func, string, bool} from "prop-types";
// eslint-disable-next-line no-unused-vars
import { TaskDescriptionWrapper, TaskDescriptionText, TaskDescriptionContainer } from './styled';
import ReactMarkdown from 'react-markdown';

function TaskDescription({ styledHeight, expand, reset, defaultNotes, isEditing, setIsEditing, setNotes, saveNotes }) {
    return (
        <TaskDescriptionWrapper height={styledHeight} onMouseEnter={() => expand()} onMouseLeave={() => reset()}>
            <TaskDescriptionContainer onClick={() => setIsEditing(true)} onBlur={() => setIsEditing(false)}>
                {
                    isEditing 
                    ? <TaskDescriptionText defaultValue={defaultNotes} onChange={(e) => setNotes(e.target.value)} onBlur={() => saveNotes()} />
                    : <ReactMarkdown>{defaultNotes}</ReactMarkdown>
                }
            </TaskDescriptionContainer>
        </TaskDescriptionWrapper>
    );
}

TaskDescription.propTypes = {
    styledHeight: number,
    defaultNotes: string,
    isEditing: bool,
    setNotes: func,
    expand: func,
    reset: func,
    saveNotes: func,
    setIsEditing: func
}

export default TaskDescription;