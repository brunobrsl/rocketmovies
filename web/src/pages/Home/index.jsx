import { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi'
import { Container, NewMovie, Content, Search } from './styles';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie';

export function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies?title=${search}`);
      setMovies(response.data);
    }

    fetchMovies();
  }, [search]);

  return (
    <Container>
      <Header />

      <main>
        <Search 
          placeholder="Pesquisar pelo título" 
          onChange={e => setSearch(e.target.value)}
        />

        <header>
          <h1>Meus filmes</h1>

          <NewMovie to="/new">
            <FiPlus />
            Adicionar filme
          </NewMovie>
        </header>

        <Content>
          {
            movies.map(movie => (
              <Movie
                key={String(movie.id)} 
                data={movie}
                onClick={() => handleDetails(movie.id)}
              />
            ))
          }
        </Content>
        
      </main>
    </Container>
  );
}