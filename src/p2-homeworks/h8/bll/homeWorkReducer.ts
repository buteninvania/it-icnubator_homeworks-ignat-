import {UserType} from '../HW8';

type ActionType = {
    type: 'sort' | 'check'
    payload: 'up' | 'down' | number
}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            return action.payload === 'up' ? [...state.sort((a, b) => a.age - b.age)] : [...state.sort((a, b) => b.age - a.age)]
        }
        case 'check': {
            return state.filter(u => u.age >= action.payload)
        }
        default: return state
    }
}