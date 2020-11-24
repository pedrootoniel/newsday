import React, { useRef, useState } from 'react';
import api from '../../services/api';
import { NewsStyled } from './style';
import Logo from '../../assents/era.png';

const News = ({ id = "modal", onClose = () => { } }) => {

  const refInputFile = useRef();
  const [fileName, setFilename] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const closed = (e) => {
    if (e.target.id === id) onClose();
  };

  const submitNews = () => {
    if (!title || !content || !refInputFile.current || !refInputFile.current.files[0]) {
      return alert('Necessário preencher todos os campos');
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('file', refInputFile.current.files[0]);

    api.post('/news/', formData).then((resp) => {

      if (resp.data.success) {
        onClose(false);
        return alert('Notícia adicionada com sucesso');
      }
      alert(resp.data.message);

    }).catch((err) => {
      console.log(err);
      alert('Erro ao adicionar notícia');
    });
  };

  return (
    <NewsStyled>
      <div className="center" id={id} onClick={closed}>
        <div className="form">
          <img src={Logo} className="img" />
          <p>Preencha os campos abaixo para adicionar uma nova notícia</p>
          <div className="search-img">
            <input
              ref={refInputFile}
              type="file"
              hidden
              accept='image/png, image/jpeg'
              onChange={() => {
                setFilename(refInputFile.current.files[0].name);
              }}
            />
            <input
              value={fileName}
              placeholder="Imagem da notícia..."
              type="text"
              readOnly
            />
            <button
              className="search"
              onClick={() => {
                refInputFile.current.click();
              }}>Escolher</button>
          </div>
          <div className="add-news">
            <input
              value={title}
              placeholder="Título..."
              onChange={(event) => {
                setTitle(event.currentTarget.value);
              }}
            />
            <textarea
              value={content}
              type="text"
              placeholder="Conteúdo..."
              onChange={(event) => {
                setContent(event.currentTarget.value);
              }}
            />
            <button onClick={submitNews}>Adicionar</button>
          </div>
        </div>
      </div>
    </NewsStyled>
  )
}

export default News;