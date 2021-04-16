import React from 'react';
import './HeaderArea.css';
import TaskDescription from './TaskDescription/TaskDescription';
import TaskProgress from './TaskProgress/TaskProgress';

function HeaderArea() {
    return (
        <section className="header-block">
            <TaskDescription />
            <TaskProgress />
        </section>
    );
}

export default HeaderArea;