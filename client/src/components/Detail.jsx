import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Activity from "./Activity";
import { Link, useParams } from "react-router-dom";
import { getCountryById } from "../redux/actions/index.js";
import { LinkTo } from "../styles/Link";
import Loader from "./Loader";

import {
  Container,
  Content,
  Info,
  DetailActivities,
  ActDiv,
  BackBtn,
  TopDetail,
} from "../styles/Detail";

export default function Detail () {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { country } = useSelector((state) => state);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(true);
    dispatch(getCountryById(id));
    const timer = setTimeout(() => {
      setLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch, id]);

  return (
    <Container>
      {loader? (
      <Loader />
      ) : (
        country?.name && (
          <div>
            <TopDetail>
              <Link to="/home">
                <BackBtn />
              </Link>
              <div>
                <h1>{country.name}</h1>
                <img src={country.flags} width="100px" alt={country.name} />
              </div>
            </TopDetail>
            <hr />
            <Content>
              <Info>
                <h1>Country Details</h1>
                <hr />
                <div>
                  <span>Continent</span> 
                  {country.continent}
                </div>
                <div>
                  <span>Capital</span>
                  {country.capital}
                </div>
                <div>
                  <span>Subregion</span>
                  {country.subregion}
                </div>
                <div>
                  <span>Area</span>
                  {country.area?.toLocaleString()} km²
                </div>
                <div>
                  <span>Population</span>
                  {country.population?.toLocaleString()}
                </div>
              </Info>
              <DetailActivities>
                <h1>Activities</h1>
                <hr />
                <ActDiv>
                  {country.activities?.length > 0 ? (
                    country.activities?.map((activity, index) => (
                      <Activity
                        key={index}
                        name={activity.name}
                        difficulty={activity.difficulty}
                        duration={activity.duration}
                        season={activity.season}
                      />
                    ))
                    
                  ) : (
                    <h3>No activities available</h3>
                  )}
                </ActDiv>
              </DetailActivities>
            </Content>
          </div>
        )
      )}
      {country?.message && (
        <div>
          <h1>{country.message}</h1>
          <LinkTo to="/home">
            <BackBtn/>
          </LinkTo>
        </div>
      )}
    </Container>
  );
}
