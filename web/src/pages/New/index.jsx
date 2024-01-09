import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ButtonText } from '../../components/ButtonText';
import { MovieItem } from '../../components/MovieItem';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { api } from '../../services/api';

import { Container, Form } from './styles';

export function New() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewMovie() {
    if(!title) {
      return alert("Digite o título do filme.");
    }

    if(!rating) {
      return alert("Digite a avaliação do filme.")
    }

    if(newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio");
    }

    await api.post("/movies", {
      title,
      description,
      rating,
      tags
    }).then(() => {
      alert("Filme criado com sucesso!");
      navigate(-1);
    }).catch(error => {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar");
        console.log(error)
      }
    });
  }

  function handleCleanInputs() {
    const confirm = window.confirm("Deseja realmente apagar os dados inseridos?");

    if(confirm) {
      setTitle("");
      setRating("");
      setDescription("");
      setTags([]);
      setNewTag("");
    }
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ButtonText title="Voltar" onClick={handleBack} />

            <h1>Novo filme</h1>
          </header>

          <div className="inputs">
            <Input 
              placeholder="Título" 
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <Input 
              type="number" 
              placeholder="Avaliação (de 0 a 5)" 
              value={rating}
              onChange={e => setRating(e.target.value)}
            />
          </div>

          <Textarea 
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
            value={description}
          />

          <h2>Marcadores</h2>

          <div className="tags">
            {
              tags.map((tag, index) => (
                <MovieItem 
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)} 
                />
              ))
            }
            <MovieItem 
              isNew 
              placeholder="Novo marcador" 
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </div>

          <div className="buttons">
            <Button title="Cancelar" onClick={handleCleanInputs} />
            <Button title="Salvar alterações" onClick={handleNewMovie} />
          </div>
        </Form>
      </main>
    </Container>
  );
}