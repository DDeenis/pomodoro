import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTomatoesFullCreator, setTomatoSlicesCreator } from '../../redux/actionCreators';
import { HeaderBlock } from './styled';
import TaskDescription from './TaskDescription/TaskDescription';
import TaskProgress from './TaskProgress/TaskProgress';

function HeaderArea() {
    const { tomatoesFull, tomatoSlices } = useSelector(state => state.header);
    const { clockState } = useSelector(state => state.clock);
    const dispatch = useDispatch();

    const setTomatoesFull = (newValue) => dispatch(setTomatoesFullCreator(newValue));
    const setTomatoSlices = (newValue) => dispatch(setTomatoSlicesCreator(newValue));

    return (
        <HeaderBlock>
            <TaskDescription />
            <TaskProgress 
                tomatoesFull={tomatoesFull}
                tomatoSlices={tomatoSlices}
                clockState={clockState}
                setTomatoesFull={setTomatoesFull}
                setTomatoSlices={setTomatoSlices}
            />
        </HeaderBlock>
    );
}

export default HeaderArea;