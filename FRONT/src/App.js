import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './componentes/Menu';
import HomePage from './paginas/HomePage';
import Produto from './paginas/Produto';
import { Create as ProdutoCreate } from './paginas/Produto/create';
import { Edit as ProdutoEdit } from './paginas/Produto/edit';
import { Delete as ProdutoDelete } from './paginas/Produto/delete';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/produto/create" element={<ProdutoCreate/>} />
        <Route path="/produto/edit/:id" element={<ProdutoEdit />} />
        <Route path="/produto/delete/:id" element={<ProdutoDelete/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
