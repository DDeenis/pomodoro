import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSound from 'use-sound';
import WorkSound from '../../../sounds/work-start.wav';
import RestSound from '../../../sounds/rest-start.wav';
import TaskProgress from './TaskProgress';
import { clockStateSelector, headerSelector } from '../../../redux/selectors';
import { clockStates } from '../../../redux/clockStates';
import { setTomatoesFullCreator, setTomatoSlicesCreator } from '../../../redux/headerReducer';

function TaskProgressContainer() {
    const { tomatoesFull, tomatoSlices, defaultHeight } = useSelector(headerSelector);
    const clockState = useSelector(clockStateSelector);

    const dispatch = useDispatch();

    const [styledHeight, setStyledHeight] = useState(defaultHeight);

    const [playWorkStart] = useSound(WorkSound, { volume: 0.15 });
    const [palyRestStart] = useSound(RestSound, { volume: 0.15 });

    const expandedHeight = defaultHeight * 2;
    const expand = useCallback(() => setStyledHeight(expandedHeight), [expandedHeight]);
    const reset = useCallback(() => setStyledHeight(defaultHeight), [defaultHeight]);    

    const setTomatoesFull = useCallback((newValue) => dispatch(setTomatoesFullCreator(newValue)), [dispatch]);
    const setTomatoSlices = useCallback((newValue) => dispatch(setTomatoSlicesCreator(newValue)), [dispatch]);

    // ???
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
        <TaskProgress
            tomatoesFull={tomatoesFull}
            tomatoSlices={tomatoSlices}
            styledHeight={styledHeight}
            expand={expand}
            reset={reset}
        />
    );
}

export default TaskProgressContainer;