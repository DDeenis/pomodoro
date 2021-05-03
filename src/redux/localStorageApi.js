const valueKeys = Object.freeze({
    TOMATOES_FULL: 'tomatoes_full',
    TOMATO_SLICES: 'tomato_slices',
    NOTES: 'notes'
})

function getByKey(key) {
    return localStorage.getItem(key);
}

function setLocalData(key, data) {
    localStorage.setItem(key, data);
}

export function setLocalTomatoesFull(value) {
    setLocalData(valueKeys.TOMATOES_FULL, value);
}

export function setLocalTomatoSlices(value) {
    setLocalData(valueKeys.TOMATO_SLICES, value);
}

export function setLocalNotes(value) {
    setLocalData(valueKeys.NOTES, value);
}

export function getLocalTomatoesFull() {
    return parseInt(getByKey(valueKeys.TOMATOES_FULL));
}

export function getLocalTomatoeSlices() {
    return parseInt(getByKey(valueKeys.TOMATO_SLICES));
}

export function getLocalNotes() {
    return getByKey(valueKeys.NOTES);
}
