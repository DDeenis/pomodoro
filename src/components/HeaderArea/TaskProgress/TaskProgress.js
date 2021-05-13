import React from 'react';
import TomatoFull from '../../../images/tomato-vector-16_full.svg';
import TomatoSlice from '../../../images/tomato-vector-16_slice.svg';
import { number, func } from "prop-types";
import { TaskProgressWrapper, TaskProgressBlock, TaskProgressText } from './styled';

function TaskProgress({ tomatoesFull, tomatoSlices, styledHeight, expand, reset }) {
    return (
        <TaskProgressWrapper height={styledHeight} onMouseEnter={() => expand()} onMouseLeave={() => reset()}>
            <TaskProgressBlock>
                <img src={TomatoFull} alt="count tomatoes" />
                <TaskProgressText>{tomatoesFull}</TaskProgressText>
            </TaskProgressBlock>
            <TaskProgressBlock>
                <img src={TomatoSlice} alt="count tomato slices" />
                <TaskProgressText>{tomatoSlices}</TaskProgressText>
            </TaskProgressBlock>
        </TaskProgressWrapper>
    );
}

TaskProgress.propTypes = {
    tomatoesFull: number,
    tomatoSlices: number,
    styledHeight: number,
    expand: func,
    reset: func
}

export default React.memo(TaskProgress);