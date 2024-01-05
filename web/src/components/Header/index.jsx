import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Container, Search, Profile } from './styles';

export function Header() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function handleSignOut() {
    //navigate("/");
    signOut();
  }

  return (
    <Container>
      <h1>Rocketmovies</h1>

      <Search 
        placeholder="Pesquisar pelo título" 
        onChange={e => setSearch(e.target.value)}
      />

      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
          <button onClick={handleSignOut}>sair</button>
        </div>

        <img 
          src={avatarUrl} 
          alt={user.name} 
        />
      </Profile>
    </Container>
  );
}