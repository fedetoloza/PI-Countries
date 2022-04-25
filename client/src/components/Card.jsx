import { CardContainer, CardDetails, CardInfo } from "../styles/Card";

export default function Card({ id, name, flags, continent }) {
  return (
    <CardContainer>
      <CardDetails to={`/home/detail/${id}`}>
        <img src={flags} alt="flag" />
        <CardInfo>
          <h2>{name}</h2>
          <p>
            <span>Continent</span> : {continent} <br />
          </p>
        </CardInfo>
      </CardDetails>
    </CardContainer>
  );
}
