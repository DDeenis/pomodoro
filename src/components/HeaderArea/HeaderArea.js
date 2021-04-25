import React from 'react';
import { HeaderBlock } from './styled';
import TaskDescription from './TaskDescription/TaskDescription';
import TaskProgress from './TaskProgress/TaskProgress';

function HeaderArea() {
    return (
        <HeaderBlock>
            <TaskDescription />
            <TaskProgress />
        </HeaderBlock>
    );
}

export default HeaderArea;