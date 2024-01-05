import { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi'
import { Container, NewMovie, Content } from './styles';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie';

export function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get("/movies");
      setMovies(response.data);
      console.log(response.data);
    }

    fetchMovies();
  }, []);

  return (
    <Container>
      <Header />

      <main>
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
              />
            ))
          }
        </Content>
        
      </main>
    </Container>
  );
}