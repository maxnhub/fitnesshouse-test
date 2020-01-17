import * as types from '../types/services';

const initialState = {
    filters: {
        'Количество занятий': undefined,
        'Срок действия': undefined,
        'Время посещения': undefined,
        'Тип секции': undefined,
        'Категория тренера': undefined,
    },
    services: [],
    counter: 0,
};

export function servicesReducer(state = initialState, action) {
    const { type } = action;

    switch(type) {
        case types.SET_SERVICES:
            return {
                ...state,
                services: action.services
            };
        case types.SET_FILTER:
            const newFilters = { ...state.filters};
            newFilters[action.title] = action.value;

            return {
                ...state,
                filters: newFilters,
            };
        case types.ADD_COUNTER:
            return {
                ...state,
                counter: state.counter + 1,
            }
        default:
            return state;
    }
}