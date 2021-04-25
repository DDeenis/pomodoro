import React, { useEffect, useRef } from 'react';
import TomatoFull from '../../../images/tomato-vector-16_full.svg';
import TomatoSlice from '../../../images/tomato-vector-16_slice.svg';
import { TaskProgressWrapper, TaskProgressBlock, TaskProgressText } from './styled';

function TaskProgress() {
    const progressBlock = useRef();
    useEffect(() => {
        progressBlock.current.addEventListener('mouseenter', () => progressBlock.current.style = 'height: 156px;');
        progressBlock.current.addEventListener('mouseleave', () => progressBlock.current.style = 'height: 78px;');
    }, []);

    return (
        <TaskProgressWrapper ref={progressBlock}>
            <TaskProgressBlock>
                <img className='task-progress-full-img' src={TomatoFull} />
                <TaskProgressText>1</TaskProgressText>
            </TaskProgressBlock>
            <TaskProgressBlock>
                <img className='task-progress-full-img' src={TomatoSlice} />
                <TaskProgressText>1</TaskProgressText>
            </TaskProgressBlock>
        </TaskProgressWrapper>
    );
}

export default TaskProgress;