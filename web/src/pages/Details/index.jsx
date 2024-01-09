import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { FaRegClock } from 'react-icons/fa';
import { Container, Content } from './styles';

import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { ButtonText } from '../../components/ButtonText';
import { StarRating } from '../../components/StarRating';
import { Header } from '../../components/Header';
import { Tag } from "../../components/Tag";

export function Details() {
  const [data, setData] = useState(null);

  const { user } = useAuth();

  const params = useParams();
  const navigate = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function handleBack() {
    navigate(-1);
  }

  async function handleDelete() {
    const confirm = window.confirm("Deseja realmente excluir o filme?");

    if(confirm) {
      await api.delete(`/movies/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies/${params.id}`);
      setData(response.data);
    }

    fetchMovie();
  }, []);

  return (
    <Container>
      <Header />

      {
        data &&
        <main>
          <Content>
            <ButtonText title="Voltar" onClick={handleBack} />

            <div className="data">
              <h1>{data.title}</h1>

              <StarRating value={data.rating} size={20} />

              <button type="button" onClick={handleDelete}>Excluir filme</button>
            </div>

            <div className="metadata">
              <img 
                src={avatarUrl} 
                alt={user.name} 
              />
              <span>Por {user.name}</span>

              <FaRegClock />
              <span>{data.created_at}</span>
            </div>

            {
              data.tags &&
              data.tags.map(tag => (
                <Tag
                  key={String(tag.id)} 
                  title={tag.name}
                />
              ))
              
            }

            <p>
              {data.description}
            </p>
          </Content>
        </main>
      }
    </Container>
  );
}