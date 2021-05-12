import React, { useState } from 'react';
import ModalContainer from '../../Modal/ModalContainer';
import { SettingsButtonText, StyledSettingsButton } from './styled';

function SettingsButton() {
    const [modalOpened, setModalOpened] = useState(false);

    return (
        <>
            <StyledSettingsButton onClick={() => setModalOpened(true)}>
                <SettingsButtonText>
                    Settings
                </SettingsButtonText>
            </StyledSettingsButton>
            {
                modalOpened && <ModalContainer openState={true} />
            }
        </>
    );
}

export default SettingsButton;