import { Filter } from "../styles/Filters";
export default function Filters({
  activities,
  handleOrdered,
  handleFilterContinent,
  handleFilterActivity,
}) {
  
  return (
    <Filter>
      <select onChange={handleFilterContinent}>
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="Oceania">Oceania</option>
        <option value="South America">South America</option>
      </select>
      <select onChange={handleOrdered}>
        <option value="">Seleccione orden</option>
        <option value="Asc">A - Z</option>
        <option value="Desc">Z - A</option>
        <option value="Min">Min population</option>
        <option value="Max">Max population</option>
      </select>
      <select onChange={handleFilterActivity}>
        <option value="All">All activities</option>
        {activities?.map((activity, index) => (
          <option key={index} value={activity.name}>
            {activity.name}
          </option>
        ))}
      </select> 
    </Filter>
  );
}