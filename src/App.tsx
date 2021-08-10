import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import "./App.sass";
function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
