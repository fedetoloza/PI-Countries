import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import trash from "../statics/trash.png";
import { createActivity, getAllCountries, getAllActivity, orderCountries } from "../redux/actions/index.js";
import { BackBtn } from "../styles/CardDetail";
import { validate } from "../validate/validation";
import { FormContainer, Country, InputLabel, Top, Content, Select, InputText, BtnForm, Error, Radio } from "../styles/Form";

export default function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { countries, allActivity } = useSelector((state) => state);
  const [errors, setErrors] = useState({});
  
  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getAllActivity());
    const timer = setTimeout(() => {dispatch(orderCountries("Asc"))}, 1000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const arrActivities = allActivity.map((x) => x.name);

  const handleOnChange = (e) => {
    setActivity({...activity, [e.target.name]: e.target.value});
    setErrors(validate({ ...activity, [e.target.name]: e.target.value }, arrActivities));
  };

  const handleSelect = (e) => {
    if (activity.countries.includes(e.target.value)) {
      alert("The country is already selected");
    } else {
      setActivity({ ...activity, countries: [...activity.countries, e.target.value]});
      setErrors(validate({ ...activity, countries: [...activity.countries, e.target.value]}, arrActivities));
    }
  };

  const handleCheck = (e) => {
    if (e.target.checked) {
      setActivity({ ...activity, [e.target.name]: e.target.value});
    } 
    setErrors(validate({ ...activity, [e.target.name]: e.target.value}, arrActivities));
  };

  const handleDelete = (country) => {
    setActivity({ ...activity, countries: activity.countries.filter((ctry) => ctry !== country)});
    setErrors(validate({ ...activity, countries: activity.countries.filter((ctry) => ctry !== country)}, arrActivities));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (
      activity.name &&
      activity.difficulty &&
      activity.duration &&
      activity.season &&
      activity.countries.length &&
      !Object.keys(errors).length
    ) {
      dispatch(createActivity(activity));
      alert("Actividad creada");
      setActivity({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],
      });
      navigate("/home");
    } else {
      alert("Please, complete all the fields or check the errors");
    }
  };

  return (
    <FormContainer onSubmit={handleOnSubmit}>
      <Top>
        <Link to="/home">
          <BackBtn title="Back" ></BackBtn>
        </Link>
      </Top>
      <Content>
        <h1>Activity</h1>
        <div>
          <InputLabel>
            <p>Country</p>
            <Select name="countries" onChange={handleSelect}>
              <option value="">Select country</option>
              {countries.map((country, index) => (
                <option key={index} value={country.name}>
                  {country.name}
                </option>
              ))}
            </Select>
            {errors.countries && <Error>{errors.countries}</Error>}
            <div>
              {activity.countries.map((country, index) => (
                <Country key={index}>
                  {country}
                  <img src={trash} alt="trash" onClick={() => handleDelete(country)}/>
                </Country>
              ))}
            </div>
          </InputLabel>
        </div>
        <div>
          <InputLabel>
            <p>Name</p>
            <InputText type="text" name="name" value={activity.name} autoComplete="off" placeholder="Activity" onChange={handleOnChange}/>
            {errors.name && <Error>{errors.name}</Error>}
          </InputLabel>
        </div>
        <div>
          <InputLabel>
            <p>Duration</p>
            <InputText
              type="text" name="duration" value={activity.duration} autoComplete="off" placeholder="Duration" onChange={handleOnChange}/>              
              {errors.duration && <Error>{errors.duration}</Error>}
          </InputLabel>
        </div>
        <div>
          <InputLabel>
            <p>Difficulty</p>
            <Radio>
              <div>
                <input type="radio" name="difficulty" value="1" onChange={handleCheck}/>
                Very easy
              </div>
              <div>
                <input type="radio" name="difficulty" value="2" onChange={handleCheck}/>
                Easy
              </div>
              <div>
                <input type="radio" name="difficulty" value="3" onChange={handleCheck}/>
                Medium
              </div>
              <div>
                <input type="radio" name="difficulty" value="4" onChange={handleCheck}/>
                Hard
              </div>
              <div>
                <input type="radio" name="difficulty" value="5" onChange={handleCheck}/>
                Very hard
              </div>
            </Radio>
            {errors.difficulty && <Error>{errors.difficulty}</Error>}
          </InputLabel>
        </div>
        <div>
          <InputLabel>
            <p>season</p>
            <Radio>
              <div>
                <input type="radio" name="season" value="Summer" onChange={handleCheck}/>
                Summer
              </div>
              <div>
                <input type="radio" name="season" value="Autumm" onChange={handleCheck}/>
                Autumm
              </div>
              <div>
                <input type="radio" name="season" value="winter" onChange={handleCheck}/>
                Winter
              </div>
              <div>
                <input type="radio" name="season" value="Spring" onChange={handleCheck}/>
                Spring
              </div>
              <div>
                <input type="radio" name="season" value="All seasons" onChange={handleCheck}/>
                All seasons
              </div>
            </Radio>
            {errors.season && <Error>{errors.season}</Error>}
          </InputLabel>
        </div>
        <div>
          <BtnForm type="submit" secondary>
            Submit
          </BtnForm>
        </div>
      </Content>
    </FormContainer>
  );
}
