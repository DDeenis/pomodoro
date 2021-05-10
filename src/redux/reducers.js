import clockReducer from "./clockReducer";
import headerReducer from "./headerReducer";
import progressBarReducer from "./progressBarReducer";

const rootReducer = {
    clock: clockReducer,
    progressBar: progressBarReducer,
    header: headerReducer
};

export default rootReducer;