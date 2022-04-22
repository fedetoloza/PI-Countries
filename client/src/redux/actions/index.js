import {
    GET_ALL_COUNTRIES,
    GET_COUNTRY_BY_ID,
    GET_ALL_ACTIVITIES,
    CREATE_ACTIVITY,
    FILTER_BY_CONTINENT,
    FILTER_BY_ACTIVITY,
    ORDER_COUNTRIES,
    SET_CURRENT_PAGE
} from ("./constantes.js");
import axios from ("axios");

export const getAllCountries = function (name) {
    return (dispatch) => {axios.get(`http://localhost:3001/countries?name=${name ? name : ""}`)
    .then((response) => {
        return dispatch({
        type: GET_ALL_COUNTRIES,
        payload: response.data
        });
    })
    .catch((error) => {alert(error.response.data.message)});
    };
};

export const getCountryById = (id) => {
    return (dispatch) => {axios.get(`http://localhost:3001/countries/${id}`)
        .then((response) => {return dispatch({
            type: GET_COUNTRY_BY_ID,
            payload: response.data,
            });
        })
        .catch((error) => {console.log(error)});
    };
};

export const getAllActivity = () => {
    return (dispatch) => {axios.get(`http://localhost:3001/activities`)
        .then((response) => {
            return dispatch({
                type: GET_ALL_ACTIVITIES,
                payload: response.data,
            });
        });
    };
};

export const createActivity = (activity) => {
    return async (dispatch) => {
        try {
            await axios.post(`http://localhost:3001/activity`, activity);
            return dispatch({
                type: CREATE_ACTIVITY,
            });      
        } catch (error) {
            console.log(error);
        }
    };
};

export const filterCountryByContinent = (payload) => {
    return {
        type: FILTER_BY_CONTINENT,
        payload,
    };
};

export const filterCountryByActivity = (payload) => {
    return {
        type: FILTER_BY_ACTIVITY,
        payload,
    };
};

export const orderCountries = (payload) => {
    return {
        type: ORDER_COUNTRIES,
        payload,
    };
};

export const setCurrentPage = (payload) => {
    return {
        type: SET_CURRENT_PAGE,
        payload,
    };
};



