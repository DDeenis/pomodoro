import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import TaskDescription from './TaskDescription';

function TaskDescriptionContainer() {
    const { defaultHeight } = useSelector(state => state.header);
    const [styledHeight, setStyledHeight] = useState(defaultHeight);

    const expand = useCallback(() => setStyledHeight(defaultHeight * 3), [defaultHeight]);
    const reset = useCallback(() => setStyledHeight(defaultHeight), [defaultHeight]);

    return (
        <TaskDescription
            styledHeight={styledHeight}
            expand={expand}
            reset={reset}
        />
    );
}

export default TaskDescriptionContainer;