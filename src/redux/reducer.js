const initialState = {
    name: null,
    age: null,
    location: null
}

const ADD_NAME = 'ADD_NAME'
const ADD_AGE = 'ADD_AGE'
const ADD_LOCATION = 'ADD_LOCATION'

export const addName = (name) => {
    return {
        type: ADD_NAME,
        payload: name
    }
}

export const addAge = (age) => {
    return {
        type: ADD_AGE,
        payload: age
    }
}

export const addLocation = (location) => {
    return {
        type: ADD_LOCATION,
        payload: location
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_NAME:
            console.log(action)
            const name = action.payload
            return{...state, name: name}
        case ADD_AGE:
            console.log(action)
            const age = action.payload
            return {...state, age: age}
        case ADD_LOCATION:
            console.log(action)
            const location = action.payload
            return {...state, location: location}            
        default:
            return state
    }
}

export default reducer