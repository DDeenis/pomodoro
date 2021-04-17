import React, { useEffect, useRef } from 'react';
import './TaskDescription.css';

function TaskDescription() {
    const descrBlock = useRef();
    useEffect(() => {
        descrBlock.current.addEventListener('mouseenter', () => descrBlock.current.style = 'height: 236px;');
        descrBlock.current.addEventListener('mouseleave', () => descrBlock.current.style = 'height: 76px;');
    }, []);

    return (
        <div className='task-description' ref={descrBlock}>
            <span className='task-description-text' contentEditable>Write your notes here.</span>
        </div>
    );
}

export default TaskDescription;