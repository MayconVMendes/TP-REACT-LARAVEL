import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './componentes/Menu';
import HomePage from './paginas/HomePage';
import Produto from './paginas/Produto';
import { Create as Produto_Create } from './paginas/Produto/create';
import { Edit as Produto_Edit } from './paginas/Produto/edit';
import { Delete as Produto_Delete } from './paginas/Produto/delete';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/produto/create" element={<Produto_Create />} />
        <Route path="/produto/edit/:id" element={<Produto_Edit />} />
        <Route path="/produto/delete/:id" element={<Produto_Delete />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
