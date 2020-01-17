import * as types from '../types/services';

export function setServices(services) {
    return {
        type: types.SET_SERVICES,
        services,
    };
}

export function setFilter(title, value) {
    return {
        type: types.SET_FILTER,
        title,
        value,
    };
}

export function onAdd(counter) {
    return {
        type: types.ADD_COUNTER,
        counter
    }
}