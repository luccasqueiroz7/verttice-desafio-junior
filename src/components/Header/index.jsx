import { useHistory } from "react-router-dom";
import { StyledHeader } from "./style";

export const Header = () => {
  const history = useHistory();

  return (
    <StyledHeader>
      <h1>Desafio Verticce</h1>
      <button onClick={() => history.push("/")}>Voltar</button>
    </StyledHeader>
  );
};
