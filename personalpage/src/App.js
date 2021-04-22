import './App.css';
import IntroPage from './components/IntroPage/IntroPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Route path='/'> <IntroPage /> </Route>
      </Router>
    </>
  );
}

export default App;
