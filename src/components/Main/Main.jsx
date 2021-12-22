import Form from '../Form';
import PokeList from '../PokeList';
import FormCreate from '../FormCreate';
import {Route, Routes} from 'react-router-dom'; //Para las rutas

const Main = () => {

  return(<main >
  <Routes>    
    <Route path="/search" element={<Form />} />
    <Route path="/" element={<PokeList />} />
    <Route path="/new" element={<FormCreate/>} />
  </Routes>
</main>);
};

export default Main;
