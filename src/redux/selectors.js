export const clockStateSelector = (state) => state.clock.clockState;
export const currentTimeSelector = (state) => state.clock.currentTime;
export const headerSelector = (state) => state.header;
export const workTimeSelector = (state) => state.settings.clockTimers.workTimeSeconds;
export const restTimeSelector = (state) => state.settings.clockTimers.restTimeSeconds;
