import { Container } from "./styles";
import Input from '../components/input/index'
import Item from "../components/list/index";
import Button from "../components/button/index";
import { useState } from "react";
import { api } from '../service/api';

function App() {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);

  const handleAddRepository = async () => {
    if(newRepo.length > 3){
    const { data } = await api.get(`repos/${newRepo}`);
    if (data.id) {
      const isExist = repositories.find(repo => repo.id === data.id)
      if (!isExist) {
        setRepositories(prev => [...prev, data]);
        setNewRepo('')
        return
      } else {
        alert("Repositorio já existe!")
      }
    }
      alert("Repositorio não encontrado!")
  }
  }
  const removerItem = (id) => {
    setRepositories(repositories.filter(repo => repo.id !== id))

  console.log("Remove "+id);
  }

  return (
    <Container>

      <img src={'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'} className="App-logo" width={"100px"} height={"100px"} alt="logo" />

      <div className="pesquisa">
        <Input value={newRepo} onChange={(e) => setNewRepo(e.target.value)} />
        <Button onCLick={handleAddRepository} />
      </div>
      {repositories.map(repo => <Item removerItem={removerItem} repo={repo} />)}
    </Container>
  );
}

export default App;
