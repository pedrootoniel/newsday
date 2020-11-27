import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CenterStyled,BoxNews,Button } from './style';
import Header from '../../Components/Header';
import api from '../../services/api';
import News from '../../Components/News'
import {useAuth} from '../../App'

function ListNews() {

  const {authUser} = useAuth()

  const [newsVisible, setNewsVisible] = useState(false)
  const [news, setNews] = useState([])

  useEffect(() => {
    api.get('/news').then((resp) => {
      if (resp.data.success) return setNews(resp.data.news);
      alert(resp.data.message);
    }).catch((err) => {
      alert('Erro ao buscar a lista de notícias');
    });
  }, []);

  return (
    <>
      <Header />
      <CenterStyled>
        <BoxNews>

<span>Últimas notícias</span>

{ authUser.authenticated &&
  <Button onClick={()=> setNewsVisible(true)}>Adicionar Notícia.</Button>

}
    {
      newsVisible &&
      <News onClose={()=> setNewsVisible(false)}/>

     
    }

        </BoxNews>
        

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

export default ListNews;