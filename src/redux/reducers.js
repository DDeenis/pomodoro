import clockReducer from "./clockReducer";
import headerReducer from "./headerReducer";
import progressBarReducer from "./progressBarReducer";
import settingsReducer from "./settingsResucer";

const reducers = {
    clock: clockReducer,
    progressBar: progressBarReducer,
    header: headerReducer,
    settings: settingsReducer
};

export default reducers;