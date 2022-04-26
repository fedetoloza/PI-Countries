import React, { useState } from "react";
import { ReloadBtn } from "../styles/CardDetail.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, filterCountryByContinent, orderCountries, filterCountryByActivity, getAllActivity, setCurrentPage } from "../redux/actions/index.js";
import Card from "./Card";
import Paged from "./Paged";
import Filters from "./Filters";
import { Button } from "../styles/Button";
import NavBar from "./NavBar";
import Loader from "./Loader";
import SearchBar from "./SearchBar";
import noResults from "../statics/noResults.svg";
import { ContainerHome, Countries, Btns, NoResult } from "../styles/Home";

export default function Home() {
  const dispatch = useDispatch();
  const { countries, page, allActivity } = useSelector((state) => state);
  const [loader, setLoader] = useState(true);
  const [filters, setFilters] = useState(false);
  const [ ,setOrder ] = useState();
  //constantes para paginado
  const countriesPerPage = 10;
  const indexLastCountry = page * countriesPerPage - 1; 
  const indexFirstCountry =
    page === 1
      ? indexLastCountry - (countriesPerPage - 1)
      : indexLastCountry - countriesPerPage; 
  const currentCountries = countries.slice(
    indexFirstCountry,
    indexLastCountry
  );

  const timer = (time) =>
    setTimeout(() => {
      setLoader(false);
    }, time);

  useEffect(() => {
    setLoader(true);
    dispatch(getAllActivity());
    timer(1000);
    dispatch(getAllCountries());
    return () => clearTimeout(timer);
  }, [dispatch]); 

  const handleFilterContinent = (e) => {
    e.preventDefault();
    dispatch(filterCountryByContinent(e.target.value));
    dispatch(setCurrentPage(1));
    setOrder(e.target.value);
  };

  const handleFilterActivity = (e) => {
    e.preventDefault();
    dispatch(filterCountryByActivity(e.target.value));
    dispatch(setCurrentPage(1));
    setOrder(e.target.value);
  };

  const handleOrdered = (e) => {
    e.preventDefault();
    dispatch(orderCountries(e.target.value));
    setOrder(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setLoader(true);
    dispatch(getAllCountries());
    dispatch(setCurrentPage(1));
    timer(500);
  };

  return (
    <ContainerHome>
      <NavBar handleClick={handleClick} />
      <SearchBar />
      <Btns>        
        <ReloadBtn primary onClick={handleClick} />
        <Button title="Filtros" secondary onClick={() => setFilters(!filters)}>
          <span>Filters</span>
        </Button>
        {filters && (
          <Filters
          activities={allActivity}
          handleClick={handleClick}
          handleOrdered={handleOrdered}
          handleFilterContinent={handleFilterContinent}
          handleFilterActivity={handleFilterActivity}
          />
          )}
      </Btns>    

      <Paged countriesPerPage={countriesPerPage} />
      
      <Countries>
        {loader ? (
          <Loader />
        ) : (
          (countries.length > 0 &&
            currentCountries?.map((country, index) => (
              <Card
                key={index}
                id={country.id}
                name={country.name}
                flags={country.flags}
                continent={country.continent}
              />
            ))) || (
            <NoResult>
              <img src={noResults} alt="no Results" />
              <h2>No results found</h2>
            </NoResult>
          )
        )}
      </Countries>
    </ContainerHome>
  );
}
