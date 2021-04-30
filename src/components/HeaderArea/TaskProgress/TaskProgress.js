import React, { useEffect, useRef } from 'react';
import TomatoFull from '../../../images/tomato-vector-16_full.svg';
import TomatoSlice from '../../../images/tomato-vector-16_slice.svg';
import WorkSound from '../../../sounds/work-start.wav';
import RestSound from '../../../sounds/rest-start.wav';
import { number, string, func } from "prop-types";
import { TaskProgressWrapper, TaskProgressBlock, TaskProgressText } from './styled';
import { clockStates } from '../../../redux/actionCreators';
import useSound from 'use-sound';

function TaskProgress({ tomatoesFull, tomatoSlices, clockState, setTomatoesFull, setTomatoSlices }) {
    // useRef to styled components
    const progressBlock = useRef();

    const [playWorkStart] = useSound(WorkSound, { volume: 0.25 });
    const [palyRestStart] = useSound(RestSound, { volume: 0.25 });

    // addEventListener to react events
    useEffect(() => {
        progressBlock.current.addEventListener('mouseenter', () => progressBlock.current.style = 'height: 156px;');
        progressBlock.current.addEventListener('mouseleave', () => progressBlock.current.style = 'height: 78px;');
    }, []);

    useEffect(() => {
        switch (clockState) {
            case clockStates.WORK:
                playWorkStart();
                break;

            case clockStates.REST:
                palyRestStart();
                setTomatoesFull(tomatoesFull + 1);
                break;

            case clockStates.STOP:
                setTomatoSlices(tomatoSlices + 1);
                break;
        
            default:
                break;
        }
    }, [clockState]);

    return (
        <TaskProgressWrapper ref={progressBlock}>
            <TaskProgressBlock>
                <img src={TomatoFull} alt="count tomatoes" />
                <TaskProgressText>{tomatoesFull}</TaskProgressText>
            </TaskProgressBlock>
            <TaskProgressBlock>
                <img src={TomatoSlice} alt="count tomato slices" />
                <TaskProgressText>{tomatoSlices}</TaskProgressText>
            </TaskProgressBlock>
        </TaskProgressWrapper>
    );
}

TaskProgress.propTypes = {
    tomatoesFull: number,
    tomatoSlices: number,
    clockState: string,
    setTomatoesFull: func,
    setTomatoSlices: func
}

export default TaskProgress;