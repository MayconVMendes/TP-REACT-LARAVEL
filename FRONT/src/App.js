import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Menu from './componentes/Menu';
import Home from './pages/Home';
import Cliente from './pages/Cliente';
import {Create as Cliente_Create } from './pages/Cliente/create';
import {Delete as Cliente_Delete } from './pages/Cliente/delete';
import {Edit as Cliente_Edit } from './pages/Cliente/edit';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cliente" element={ <Cliente />}/>
        <Route path="/cliente/create" element={ <Cliente_Create />}/>
        <Route path="/cliente/delete/:id" element={ <Cliente_Delete />}/>
        <Route path="/cliente/edit/:id" element={ <Cliente_Edit />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
