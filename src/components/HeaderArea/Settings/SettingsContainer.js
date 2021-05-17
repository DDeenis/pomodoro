import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { restTimeSelector, workTimeSelector } from '../../../redux/selectors';
import { changeRestTimeCreator, changeWorkTimeCreator } from '../../../redux/settingsResucer';
import Settings from './Settings';

function SettingsContainer() {
    const workTimeSeconds = useSelector(workTimeSelector);
    const restTimeSeconds = useSelector(restTimeSelector);
    const dispatch = useDispatch();

    const [workTime, setWorkTime] = useState(workTimeSeconds);
    const [restTime, setRestTime] = useState(restTimeSeconds);

    const setTime = () => {
        dispatch(changeWorkTimeCreator(workTime));
        dispatch(changeRestTimeCreator(restTime));
    };

    return (
        <Settings
            workTimeSeconds={workTime}
            restTimeSeconds={restTime}
            setWorkTime={setWorkTime}
            setRestTime={setRestTime}
            setTime={setTime}
        />
    );
}

export default SettingsContainer;