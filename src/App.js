import './App.css';
import Error404 from './pages/Error404';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Portafolio from './pages/Portafolio';
function App() {
  return (
  <Router>

<Switch>

<Route path="home">

</Route>


<Route path="/portafolio">
<Portafolio/>
</Route>


<Route component={Error404}/>

</Switch>

  </Router>
  
    );
}

export default App;
