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
      alert('Error fetching News list');
    });
  }, []);

  return (
    <>
      <Header />
      <CenterStyled>
        <BoxNews>

<span>Last News</span>
<br />
<p>Welcome to Website for News</p>

{ authUser.authenticated &&
  <Button onClick={()=> setNewsVisible(true)}>Add New News.</Button>

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
                <span>Read complete News</span>
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
                <span>Read complete News</span>
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