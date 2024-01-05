import { Container, Search, Profile } from './styles';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <Container>
      <h1>Rocketmovies</h1>

      <Search placeholder="Pesquisar pelo título" />

      <Profile to="/profile">
        <div>
          <strong>Bruno Brasil</strong>
          <Link to="#">sair</Link>
        </div>

        <img 
          src="https://github.com/brunobrsl.png" 
          alt="Foto do usuário" 
        />
      </Profile>
    </Container>
  );
}