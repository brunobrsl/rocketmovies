import { FiPlus } from 'react-icons/fi'
import { Container, NewMovie, Content } from './styles';

import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie';

export function Home() {
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
          <Movie data={{
            title: 'Interestellar',
            description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
            tags: [
              {id: '1', name: 'Ficção científica'},
              {id: '2', name: 'Drama'},
              {id: '3', name: 'Família'}
            ]
          }}
          />

          <Movie data={{
            title: 'Interestellar',
            description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
            tags: [
              {id: '1', name: 'Ficção científica'},
              {id: '2', name: 'Drama'},
              {id: '3', name: 'Família'}
            ]
          }}
          />

          <Movie data={{
            title: 'Interestellar',
            description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
            tags: [
              {id: '1', name: 'Ficção científica'},
              {id: '2', name: 'Drama'},
              {id: '3', name: 'Família'}
            ]
          }}
          />
        </Content>
        
      </main>
    </Container>
  );
}