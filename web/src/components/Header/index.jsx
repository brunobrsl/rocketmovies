import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { Link } from 'react-router-dom';

import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Container, Profile } from './styles';

export function Header() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container>
      <h1>Rocketmovies</h1>

      <Profile>
        <Link to="/profile">
          <strong>{user.name}</strong>
          <img 
            src={avatarUrl} 
            alt={user.name} 
          />
        </Link>
        <button onClick={handleSignOut}>sair</button>

       
      </Profile>
    </Container>
  );
}