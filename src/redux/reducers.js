import clockReducer from "./clockReducer";
import headerReducer from "./headerReducer";
import progressBarReducer from "./progressBarReducer";

const reducers = {
    clock: clockReducer,
    progressBar: progressBarReducer,
    header: headerReducer
};

export default reducers;