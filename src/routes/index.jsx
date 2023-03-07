import { Route, Switch } from "react-router-dom";
import { ChallengerOne } from "../pages/ChallengerOne";
import { ChallengerTwo } from "../pages/ChallengerTwo";
import { HomePage } from "../pages/HomePage";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/desafio/1/">
        <ChallengerOne />
      </Route>
      <Route path="/desafio/2/">
        <ChallengerTwo />
      </Route>
    </Switch>
  );
};
