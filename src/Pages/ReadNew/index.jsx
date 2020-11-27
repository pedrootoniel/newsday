import React, { useState, useEffect } from 'react';
import { ReadNewsStyled } from './style'
import Header from '../../Components/Header'
import User from '../../assents/user.png'
import api from '../../services/api';
import {useAuth} from '../../App'


function ReadNews({ match }) {

  const {authUser} = useAuth()

  const [news, setNews] = useState('');
  const [text, setText] = useState('');
  const [comments, setComments] = useState([]);

  const submitComments = () => {
    api.post('/comments', { text, news_id: match.params.id,user_id: authUser.userId }).then(resp => {
      if (resp.data.success) {
        setText('')
        setComments([resp.data.comment, ...comments])
        return alert('Comentario Adicionado.');
      }
    }).catch((err) => {
      alert('Erro ao adicionar o comentario');
    })
  }

  useEffect(() => {
    console.log(match.params.id);
    api.get('/news/' + match.params.id).then((resp) => {
      console.log(resp.data);
      if (resp.data.success) {
        setComments(resp.data.news.comments)
        return setNews(resp.data.news)
      }

      alert(resp.data.message);
    }).catch((err) => {
      console.log(err);
      alert('Erro ao buscar os dados da notícias');
    });
  }, []);


  return (

    <>

      <Header />
      <ReadNewsStyled>
        {/* CONTENTS INICIO NOTICIA */}
        <div className="content">
          <img src={news.image} />
          <strong>{news.title}</strong>
          <p>{news.content}</p>
          <strong>Comentários</strong>


          {/* CONTENTS PARA ADICIONAR COMENTARIOS */}
          <div className="comentario">
            <div className="new">
              <input value={text} onChange={e => setText(e.target.value)} placeholder="Escreva aqui seu comentário..." />
              <button onClick={submitComments}>Adicionar</button>
            </div>


            {
              comments.map(comment => (
                <div className="image-user" key={comment.id}>
                  <img src={comment.user_photo ||User} />
                  <div className="user-comentario">
                    <strong>{comment.user_name}</strong>
                    <p>{comment.text}</p>
                  </div>

                </div>

              ))
            }
          </div>
        </div>
      </ReadNewsStyled>

    </>

  )
}

export default ReadNews;