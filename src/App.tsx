import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/home/Home";
import "./App.sass";
import { Detail } from "./pages/detail/Detail";
function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
