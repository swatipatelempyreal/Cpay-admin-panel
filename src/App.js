import { BrowserRouter as Router} from "react-router-dom";
import Routings from './routes'
function App() {
  return (
    <div className="App">
      <Router>
       <Routings/>
      </Router>
    </div>
  );
}

export default App;