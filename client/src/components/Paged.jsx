import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/actions/index.js";
import { ContainerPage } from "../styles/Paged";


export default function Paged({ countriesPerPage }) {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state);

  const pageCountries = [];
  // Método actualizador del estado global de la página
  const changePage = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };
    // Método para calcular el número de páginas y el math.trunc me vuelve a salvar el dia
  for (let i = 1; i < Math.trunc((countries.length / countriesPerPage)+2); i++) {
    pageCountries.push(i);
  }

  return (
      <ContainerPage>
        {pageCountries?.map((page) => (
        <span onClick={() => changePage(page)} key={page}>
          {page}
        </span>
      ))}
    </ContainerPage>
  );
}

