
import './App.css';
import {Link, Routes, Route} from "react-router-dom";
import WelcomePage from './WelcomePage';
import ClosePage from './ClosePage';
import OpenPage from './OpenPage';
import RedirectPage from './RedirectPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
          <nav className="navigation-menu">
            <ul>
              <li>
                <Link to="/" className="Link">
                  Главная
                </Link>
                <Link to="/close" className="Link">
                  Закрыть
                </Link>
                <Link to="/open" className="Link">
                  Открыть
                </Link>
                <Link to="/redirect" className="Link">
                  Redirect
                </Link>
               
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route exact path="/" element={<WelcomePage />}></Route>
          <Route path="/close" element={<ClosePage />}></Route>
          <Route path="/open" element={<OpenPage />}></Route>
          <Route path="/redirect" element={<RedirectPage/>}></Route>
          
        </Routes>
      
    </div>
  );
}

export default App;
