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

            <ModalContainer openState={modalOpened} setOpenState={setModalOpened}>text</ModalContainer>
        </>
    );
}

export default SettingsButton;