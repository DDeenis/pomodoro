import React, {useEffect} from "react";
import ProgressBarArea from "./ProgressBarArea";
import {useDispatch} from "react-redux";
import {setTomatoesFullCreator, setTomatoSlicesCreator} from "../../redux/actionCreators";
import {getLocalTomatoesFull, getLocalTomatoeSlices} from "../../redux/localStorageApi";

function ProgressBarAreaContainer() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTomatoesFullCreator(getLocalTomatoesFull() || 0));
        dispatch(setTomatoSlicesCreator(getLocalTomatoeSlices() || 0));
    }, [])

    return (
        <ProgressBarArea />
    );
}

export default ProgressBarAreaContainer;