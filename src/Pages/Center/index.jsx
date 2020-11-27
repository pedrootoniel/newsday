import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CenterStyled,BoxNews,Button } from './style';
import Header from '../../Components/Header';
import api from '../../services/api';
import News from '../../Pages/News'
import {useAuth} from '../../App'
import Login from '../../Components/Login'

function ListNews() {

  const {authUser} = useAuth()

  const [loginVisible, setLoginVisible]= useState(false)

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
<br />
<p>Seja Bem Vindo ao Nosso Site de Notícias, Cadastra-se e fique por dentro de tudo !!</p>

{ authUser.authenticated &&
  <Button onClick={()=> setNewsVisible(true)}>Adicionar Notícia.</Button>

}
    {
      newsVisible &&
      <News onClose={()=> setNewsVisible(false)}/>

     
    }

        </BoxNews>

        {  !authUser.authenticated &&
          news.map(newsMap => (
            <Link key={newsMap.id} onClick={()=> setLoginVisible(true)}>
              <img src={newsMap.image}></img>
              <div className="paragrafo">
                <strong>{newsMap.title}</strong>
                <p>{newsMap.content}</p>
                <span>Ler Notícia completa</span>
              </div>
              
            </Link>

          ))
        }
      {
      loginVisible &&
      <Login onClose={()=> setLoginVisible(false)}/>
      }


        {  authUser.authenticated &&
          news.map(newsMap => (
            <Link to={`/news/${newsMap.id}`} key={newsMap.id} onClick={()=> setLoginVisible(true)}>
              <img src={newsMap.image}></img>
              <div className="paragrafo">
                <strong>{newsMap.title}</strong>
                <p>{newsMap.content}</p>
                <span>Ler Notícia completa</span>
              </div>
              
            </Link>

          ))
        }
      {
      loginVisible &&
      <Login onClose={()=> setLoginVisible(false)}/>
      }

      </CenterStyled>
    </>
  )
}

export default ListNews;