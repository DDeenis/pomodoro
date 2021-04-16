import React, { useEffect, useRef } from 'react';
import './TaskDescription.css';

function TaskDescription() {
    const ref = useRef();
    useEffect(() => {
        ref.current.addEventListener('mouseenter', () => ref.current.style = 'height: 160px;');
        ref.current.addEventListener('mouseleave', () => ref.current.style = 'height: 76px;');
    }, []);

    return (
        <div className='task-description' ref={ref}>
            <span className='task-description-text' contentEditable>Write your notes here.</span>
        </div>
    );
}

export default TaskDescription;