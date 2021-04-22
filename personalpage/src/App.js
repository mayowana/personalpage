import "./App.css";
import IntroPage from "./components/IntroPage/IntroPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Marketing from "./components/marketing/Marketing";

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
      </Router>
    </>
  );
}

export default App;
