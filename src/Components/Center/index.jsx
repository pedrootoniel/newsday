import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CenterStyled } from './style';
import Header from '../Header';
import api from '../../services/api';

function Center() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    api.get('/news').then((resp) => {

      console.log(resp.data);
      if (resp.data.success) return setNews(resp.data.news);
      alert(resp.data.message);

    }).catch((err) => {
      console.log(err);
      alert('Erro ao buscar a lista de notícias');
    });
  }, []);

  return (

    <>
      <Header />
      <CenterStyled>

        {
          news.map(newsMap => (
            <Link to={`/news/${newsMap.id}`} key={newsMap.id}>
              <img src={newsMap.image}></img>
              <div className="paragrafo">
                <strong>{newsMap.title}</strong>
                <p>{newsMap.content}</p>
                <span>Ler Notícia completa</span>
              </div>
            </Link>
          ))
        }

      </CenterStyled>
    </>
  )
}

export default Center;