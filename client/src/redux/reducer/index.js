import {
  FILTER_BY_CONTINENT,
  FILTER_BY_ACTIVITY,
  GET_ALL_COUNTRIES,
  GET_COUNTRY_BY_ID,
  SET_CURRENT_PAGE,
  ORDER_COUNTRIES,
  GET_ALL_ACTIVITY,
} from "../actions/types";

const initialState = {
  countries: [],
  allCountries: [],
  country: [],
  allActivity: [],
  page: 1,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };
    case GET_COUNTRY_BY_ID:
      return {
        ...state,
        country: action.payload,
      };
    case GET_ALL_ACTIVITY:
      return {
        ...state,
        allActivity: action.payload,
      };
    case FILTER_BY_CONTINENT:
      const allCountries = state.allCountries;
      const continentFilter =
        action.payload === "All"? allCountries : allCountries.filter((country) => country.continent === action.payload);
      return { ...state, countries: continentFilter };
    
    case FILTER_BY_ACTIVITY:
      const allCountriesActivity = state.allCountries;
      const activityFilter = action.payload === "All"
          ? allCountriesActivity.filter((country) => country.activities.length > 0)
          : allCountriesActivity.filter((country) => country.activities && country.activities.map((act) => act.name).includes(action.payload));
      return { ...state, countries: activityFilter};
    
      case ORDER_COUNTRIES:
      let ordered = state.countries;
      action.payload === "Asc" && ordered.sort((a, b) => {
          return a.name.localeCompare(b.name);
      });
      action.payload === "Desc" && ordered.sort((a, b) => {
          return b.name.localeCompare(a.name);
      });
      action.payload === "Max" && ordered.sort((a, b) => {
          return b.population - a.population;
      });
      action.payload === "Min" && ordered.sort((a, b) => {
          return a.population - b.population;
      });
      return { ...state, countries: ordered};
    case SET_CURRENT_PAGE:
      return { ...state, page: action.payload};
    default:
      return { ...state };
  }
}

export default rootReducer;
