import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Adopt from './components/Adopt';
import Form from './components/Form'
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Form' element={<Form/>}/>
        <Route path='/Adopt' element={<Adopt/>}/>
        <Route path='*' element={
          <NotFound/>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
