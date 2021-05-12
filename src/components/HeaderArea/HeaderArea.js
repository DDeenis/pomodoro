import React from 'react';
import SettingsButton from './SettingsButton/SettingsButton';
import { HeaderBlock } from './styled';
import TaskDescriptionContainer from './TaskDescription/TaskDescriptionContainer';
import TaskProgressContainer from './TaskProgress/TaskProgressContainer';

function HeaderArea() {
    return (
        <HeaderBlock>
            <TaskDescriptionContainer />
            <SettingsButton />
            <TaskProgressContainer />
        </HeaderBlock>
    );
}

export default HeaderArea;