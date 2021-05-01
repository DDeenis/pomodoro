import React from 'react';
import ButtonsMenuContainer from './ButtonsMenu/ButtonsMenuContainer';
import ProgressBarContainer from './ProgressBar/ProgressBarContainer';
import { ProgressBarSection } from './styled';

function ProgressBarArea() {
    return (
        <ProgressBarSection>
            <ButtonsMenuContainer />
            <ProgressBarContainer />
        </ProgressBarSection>
    );
}

export default ProgressBarArea;