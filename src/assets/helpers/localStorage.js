const LIST_NAME = 'activity-list-store';

export function writeToLocalStorage(list) {
    localStorage.setItem(LIST_NAME, JSON.stringify(list));
}

export function clearLocalStorage () {
    return localStorage.removeItem(LIST_NAME);
}

export function readFromLocalStorage() {
    const str = localStorage.getItem(LIST_NAME);
    return JSON.parse(str) || [];
}
