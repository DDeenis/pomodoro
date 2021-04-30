import React, { useEffect, useRef } from 'react';
import { TaskDescriptionWrapper, TaskDescriptionText } from './styled';

function TaskDescription() {
    // useRef to styled components
    const descrBlock = useRef();

    // addEventListener to react events
    useEffect(() => {
        descrBlock.current.addEventListener('mouseenter', () => descrBlock.current.style = 'height: 236px;');
        descrBlock.current.addEventListener('mouseleave', () => descrBlock.current.style = 'height: 76px;');
    }, []);

    return (
        <TaskDescriptionWrapper ref={descrBlock}>
            <TaskDescriptionText placeholder='Write your notes here.'></TaskDescriptionText>
        </TaskDescriptionWrapper>
    );
}

export default TaskDescription;