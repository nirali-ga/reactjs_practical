import { GET_ASTEROID_DETAILS_SUCCESS, GET_ASTEROID_DETAILS_FAILURE, GET_ASTEROIDS } from "../constants/asteroid.constant";

const initialState = {
    asteroidError: null,
    asteroids: [],
    asteroidDetails: { }
};

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_ASTEROID_DETAILS_SUCCESS:
            return {
                ...state,
                asteroidDetails: action.payload
            }

        case GET_ASTEROID_DETAILS_FAILURE:

            return {
                ...state,
                asteroidError: action.payload
            }

        case GET_ASTEROIDS:

            return {
                ...state,
                asteroids: [...action.payload]
            }

        default:
            return {
                ...state
            }
    }

}


export default rootReducer;
