import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "video-react/dist/video-react.css";
import { Home, Workout } from './pages'
import NavBars from './commen/NavBars';

function App() {

  return (
    <div className="App">
      <NavBars />
      <BrowserRouter>
        <Routes>
          
          <Route path="/" index element={<Home />}>
          </Route>
          <Route path="workout" index element={<Workout />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
