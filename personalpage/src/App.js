import "./App.css";
import IntroPage from "./components/IntroPage/IntroPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Marketing from "./components/marketing/Marketing";
import Markabout from "./components/marketing/markabout/Markabout";
import Contact from './components/contact/Contact'
import {useState} from 'react';
import Themecontext from './components/themecontext/Themecontext'

function App() {
  const [mode, setMode] = useState(false);

  const setTheme = () => {
    setMode(!mode)
  }

  return (
    <>
    <Themecontext.Provider value={mode}>
      <Router>
        <Route exact path="/">
          <IntroPage setTheme={setTheme} />
        </Route>
        <Route exact path="/work">
          <Marketing />
        </Route>
        <Route exact path="/about">
          <Markabout />
        </Route>
        <Route exact path='/contact/'><Contact /></Route>
      </Router>
      </Themecontext.Provider>
    </>
  );
}

export default App;
