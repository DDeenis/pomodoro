import React, { useEffect, useRef } from 'react';
import './TaskProgress.css';

import TomatoFull from '../../../images/tomato-vector-16_full.svg';
import TomatoSlice from '../../../images/tomato-vector-16_slice.svg';

// eslint-disable-next-line no-unused-vars
function TaskProgress(props) {
    const progressBlock = useRef();
    useEffect(() => {
        progressBlock.current.addEventListener('mouseenter', () => progressBlock.current.style = 'height: 156px;');
        progressBlock.current.addEventListener('mouseleave', () => progressBlock.current.style = 'height: 78px;');
    }, []);

    return (
        <div className='task-progress' ref={progressBlock}>
            <div className='task-progress-full'>
                <img className='task-progress-full-img' src={TomatoFull} />
                <p className='task-progress-text'>1</p>
            </div>

            <div className='task-progress-partial'>
                <img className='task-progress-full-img' src={TomatoSlice} />
                <p className='task-progress-text'>1</p>
            </div>
        </div>
    );
}

export default TaskProgress;