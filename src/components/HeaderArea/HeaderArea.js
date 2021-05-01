import React from 'react';
import { HeaderBlock } from './styled';
import TaskDescriptionContainer from './TaskDescription/TaskDescriptionContainer';
import TaskProgressContainer from './TaskProgress/TaskProgressContainer';

function HeaderArea() {
    return (
        <HeaderBlock>
            <TaskDescriptionContainer />
            <TaskProgressContainer />
        </HeaderBlock>
    );
}

export default HeaderArea;