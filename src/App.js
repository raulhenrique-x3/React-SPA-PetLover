import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Adopt from './components/Adopt';
import Form from './components/Form'
import CepForm from './components/CepForm'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { routes } from './const/routes';
import Verificacao from './components/Verificacao';

function App() {
  return (
    <div className='app'>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/Form' element={<Form/>}/>
        <Route path='/Adopt' element={<Adopt/>}/>
        <Route path={routes.Cep} element={<CepForm/>}/>
        <Route path={routes.Verificacao} element={<Verificacao/>}/>
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
