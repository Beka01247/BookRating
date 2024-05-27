import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Books from './components/Books'

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/books'>Books</Link>
            </li>
          </ul>
        </header>
        <main>
          <Routes>
            <Route path='/'/>
            <Route path='/books' element={<Books/>}/>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
