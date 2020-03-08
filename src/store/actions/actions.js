import * as types from './actionTypes';
import axios from 'axios';

export const fetchedRestaurants = (restaurants,search,option) => {
    return {
        type: types.FETCH_RESTAURANTS,
        restaurants,
        search,
        option
    }
}


export const fetchRestaurants = (search,option) => {
    return dispatch => {
        axios.get('http://starlord.hackerearth.com/TopRamen')
            .then( restaurants => {
                let result = restaurants.data;
                dispatch(fetchedRestaurants(result,search,option));
            })
            .catch( e => {
                dispatch(fetchFailed(e));
            });
    }
}

export const fetchFailed = (err) => {
    return {
        type: types.FETCH_FAILED,
        err
    }
}

export const fetchedRestaurantDetails = (restaurant) => {
    return {
        type: types.FETCH_RESTAURANT_DETAILS,
        restaurant
    }
}