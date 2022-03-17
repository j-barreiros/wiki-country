import { Routes, Route } from 'react-router-dom';

// Components / Pages
import Home from "./pages/Home/Home";
import TestePage from './components/TestePage';
import NoMatch from './pages/NoMatch/NoMatch';
import CountryPage from './pages/CountryPage/CountryPage';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/teste' element={<TestePage />}></Route>
      <Route path=':countryName' element={<CountryPage />}></Route>
      <Route path='*' element={<NoMatch />}></Route>
    </Routes>
  );
}

export default App;
