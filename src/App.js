import './styles/app.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import DetailPage from './components/DetailPage';
import ListPage from './components/ListPage';
import ErrorPage from './components/ErrorPage';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='movie/:id' element={<DetailPage/>}/>
        <Route path='movies/:type' element={<ListPage/>}/>
        <Route path='/*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
