import "./App.css";
import IntroPage from "./components/IntroPage/IntroPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Marketing from "./components/marketing/Marketing";
import Markabout from './components/marketing/markabout/Markabout'

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          {" "}
          <IntroPage />{" "}
        </Route>
        <Route exact path="/marketing">
          {" "}
          <Marketing />{" "}
        </Route>
        <Route exact path='/marketing/about'><Markabout /></Route>
      </Router>
    </>
  );
}

export default App;
