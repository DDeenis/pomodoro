import React from 'react';
import { number, func } from "prop-types";
import { TaskDescriptionWrapper, TaskDescriptionText } from './styled';

function TaskDescription({ styledHeight, expand, reset }) {
    return (
        <TaskDescriptionWrapper height={styledHeight} onMouseEnter={() => expand()} onMouseLeave={() => reset()}>
            <TaskDescriptionText />
        </TaskDescriptionWrapper>
    );
}

TaskDescription.propTypes = {
    styledHeight: number,
    expand: func,
    reset: func
}

export default TaskDescription;