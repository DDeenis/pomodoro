import React from 'react';
import ModalContainer from '../Modal/ModalContainer';
import { HeaderBlock } from './styled';
import TaskDescriptionContainer from './TaskDescription/TaskDescriptionContainer';
import TaskProgressContainer from './TaskProgress/TaskProgressContainer';

function HeaderArea() {
    return (
        <HeaderBlock>
            <TaskDescriptionContainer />
            <TaskProgressContainer />
            <ModalContainer />
        </HeaderBlock>
    );
}

export default HeaderArea;