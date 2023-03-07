import { useHistory } from "react-router-dom";
import { HomePageSection } from "./style";

export const HomePage = () => {
  const history = useHistory();

  return (
    <HomePageSection>
      <h1>Desafio Verttice</h1>
      <ul>
        {[1, 2, 3, 4, 5].map((elem) => (
          <li key={elem} onClick={() => history.push(`/desafio/${elem}/`)}>
            <p>Desafio {elem}</p>
          </li>
        ))}
      </ul>
    </HomePageSection>
  );
};
