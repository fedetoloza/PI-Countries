import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/actions/index.js";
import { ContainerPage, PrevNext, ContPag, NextBtn, BckBtn, FstPageBtn, LstPageBtn } from "../styles/Paged";



export default function Paged({ countriesPerPage }) {
  const dispatch = useDispatch();
  const { countries, page } = useSelector((state) => state);

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
    <div>
      
      {pageCountries.length > 0 && (
        <PrevNext>
          <ContPag>
          <FstPageBtn onClick={() => changePage(1)} disabled={page === 1}>FIRST</FstPageBtn>
          <BckBtn onClick={() => changePage(page - 1)} disabled={page === 1}>BACK</BckBtn>
          <span>
            Página {page} de {pageCountries.length}
          </span>
          <NextBtn onClick={() => changePage(page + 1)} disabled={page >= pageCountries.length}>NEXT</NextBtn>
          <LstPageBtn onClick={() => changePage(pageCountries.length)} disabled={page >= pageCountries.length}>LAST</LstPageBtn>
          </ContPag>
        </PrevNext>
      )}
      
      <ContainerPage>
        {pageCountries?.map((page) => (
        <span onClick={() => changePage(page)} key={page}>
          {page}
        </span>
      ))}
      </ContainerPage>
    </div>
  );
}

