import { Route, Switch } from "react-router-dom";
import { ChallengerOne } from "../pages/ChallengerOne";
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
    </Switch>
  );
};
