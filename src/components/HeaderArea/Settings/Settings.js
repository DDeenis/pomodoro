import * as React from 'react';
import { number, func } from 'prop-types';
import { getMinutes, getSeconds, minutesToSeconds } from '../../../redux/formatTime';
import { ChangeTimeInput, ChangeTimeItem, ChangeTimeLabel, ChangeTimeWrapper, StyledSettings } from './styled';

function Settings({ workTimeSeconds, restTimeSeconds, setWorkTime, setRestTime, setTime }) {
    return (
        <StyledSettings>
            <ChangeTimeWrapper onBlur={setTime}>
                <ChangeTimeItem>
                    <ChangeTimeLabel htmlFor="work-minutes">Work (minutes)</ChangeTimeLabel>
                    <ChangeTimeInput id="work-minutes" value={getMinutes(workTimeSeconds)} onChange={e => setWorkTime(minutesToSeconds(e.target.value))} />
                    <ChangeTimeLabel htmlFor="rest-minutes">Rest (minutes)</ChangeTimeLabel>
                    <ChangeTimeInput id="rest-minutes" value={getMinutes(restTimeSeconds)} onChange={e => setRestTime(minutesToSeconds(e.target.value))} />
                </ChangeTimeItem>
                <ChangeTimeItem>
                    <ChangeTimeLabel htmlFor="work-seconds">Work (seconds)</ChangeTimeLabel>
                    <ChangeTimeInput id="work-seconds" defaultValue={getSeconds(workTimeSeconds)} />
                    <ChangeTimeLabel htmlFor="rest-seconds">Rest (seconds)</ChangeTimeLabel>
                    <ChangeTimeInput defaultValue={getSeconds(restTimeSeconds)} />
                </ChangeTimeItem>
            </ChangeTimeWrapper>
        </StyledSettings>
    );
}

Settings.propTypes = {
    workTimeSeconds: number,
    restTimeSeconds: number,
    setWorkTime: func,
    setRestTime: func,
    setTime: func
}

export default Settings;
