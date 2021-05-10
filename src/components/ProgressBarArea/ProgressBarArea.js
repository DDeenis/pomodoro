import React from 'react';
import ProgressBarContainer from './ProgressBar/ProgressBarContainer';
import { ProgressBarSection } from './styled';

function ProgressBarArea() {
    return (
        <ProgressBarSection>
            <ProgressBarContainer />
        </ProgressBarSection>
    );
}

export default ProgressBarArea;