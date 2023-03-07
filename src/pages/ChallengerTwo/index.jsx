import { useState } from "react";
import { Header } from "../../components/Header";
import { ChallengerTwoSection } from "./style";

const movies = [
  {
    title: "The Godfather",
    rating: 9.2,
    budget: 6000000,
  },
  {
    title: "The Shawshank Redemption",
    rating: 9.3,
    budget: 25000000,
  },
  {
    title: "The Dark Knight",
    rating: 9.0,
    budget: 185000000,
  },
  {
    title: "Pulp Fiction",
    rating: 8.9,
    budget: 8000000,
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    rating: 8.9,
    budget: 94000000,
  },
  {
    title: "The Good, the Bad and the Ugly",
    rating: 8.8,
    budget: 1200000,
  },
];

export const ChallengerTwo = () => {
  const [totalBudget, setTotalBudget] = useState(0);

  function movieBudget() {
    let budgetMovies = movies.reduce((acc, currentValue) => {
      return currentValue.rating >= 7 && acc + currentValue.budget;
    }, 0);

    setTotalBudget(budgetMovies);
  }

  return (
    <>
      <Header />
      <ChallengerTwoSection>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>
              <p>Titulo: {movie.title}</p>
              <p>Classificação: {movie.rating}</p>
              <p>
                Orçamento:
                {movie.budget.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </li>
          ))}
        </ul>
        <button onClick={movieBudget}>Gerar orçamento total</button>
        <p>
          {totalBudget?.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </ChallengerTwoSection>
    </>
  );
};
