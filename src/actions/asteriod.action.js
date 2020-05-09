import { getAsteroidById, getAsteroids } from "../services/asteroid.service"
import { GET_ASTEROID_DETAILS_SUCCESS, GET_ASTEROID_DETAILS_FAILURE, GET_ASTEROIDS } from "../constants/asteroid.constant";

export const searchAsteroid = (asteroidId) => ((dispatch) => {
    getAsteroidById(asteroidId).then((res) => {
        console.log(res)
        if (res && res.status === 200) {
            dispatch({
                type: GET_ASTEROID_DETAILS_SUCCESS,
                payload: res.data
            });
        }
    }).catch((error) => {
        console.log(error);
        if (error.response.status === 404) {
            dispatch({
                type: GET_ASTEROID_DETAILS_FAILURE,
                payload: 'No asteriod Id found.'
            });
        }
    })
});

export const displayAsteriods = () => ((dispatch) => {
    getAsteroids().then((res) => {
        if (res && res.status === 200) {
            dispatch({
                type: GET_ASTEROIDS,
                payload: res.data.near_earth_objects
            });
        }
    }).catch((error) => {
        console.log(error);
    })
})