import * as types from '../actions/actionTypes';

const initialStore = {
    restaurants: [],
    restaurant: null,
    err: null
}

const reducer = (state=initialStore, action) => {
    switch(action.type){
        case types.FETCH_RESTAURANTS:
            let result = action.restaurants;
            if(action.search){
                if(action.option === 'year'){
                    result = result.filter((restaurant) => {
                        return ((restaurant['Top Ten']).toUpperCase()).match(action.search.toUpperCase());
                    });
                }
                else if(action.option === 'variety'){
                    result = result.filter((restaurant) => {
                        return ((restaurant.Variety).toUpperCase()).match(action.search.toUpperCase());
                    });
                }
                else if(action.option === 'country'){
                    result = result.filter((restaurant) => {
                        return ((restaurant.Country).toUpperCase()).match(action.search.toUpperCase());
                    });
                }
                else if(action.option === 'stars'){
                    result = result.filter((restaurant) => {
                        return restaurant.Stars === parseFloat(action.search);
                    });
                }
                if(result.length === 0){
                    result = "Your search '" + action.search + "' doesn't match any results!!"; 
                }
            }
            return {
                ...state,
                restaurants: result
            }
        case types.FETCH_RESTAURANT_DETAILS:
            return {
                ...state,
                restaurant: action.restaurant
            }
        case types.FETCH_FAILED:
            return {
                ...state,
                err: action.err
            }
        default:
            return state;
    }
}

export default reducer;

