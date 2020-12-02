import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'
import Header from '../../components/Header'
import Modal from '../../components/Modal';
import {
  ContainerL,
  AddNews,
  ImgLoad,
  NewsText,
  Title,
  NewsAdd,
  Search,
  Input,
  TextContent,
  OpenNews,
  ButtonStyled,
  LinkD
} from './styles'
import Login from '../../components/Login'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useAuth} from '../../App'


export const List = props => {
  const {authUser} = useAuth()
  const [notices, setNotices] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [modalVisible, setModalVisible] = useState(false)
  const [loginVisible, setLoginVisible] = useState(false)

  const errorList = () => toast.error("Erro ao carregar as notícias!")

  useEffect(() => {
    refreshList()
  }, [])

  const refreshList = () => {
    setLoading(true)
    api.get('/news').then(resp => {
      if (resp.data.success) {
        setNotices(resp.data.news)
        return setLoading(false)
      }
      alert(resp.data.message)

    }).catch((err) => {
      errorList()
    })
  }

  const searchB = () => {
    api.get(`/news?search=${search}`).then(resp => {
      return setNotices(resp.data.news)
    }).catch((err) => {
      alert('Noticia não encontrada!')
    })
  }

  return (
    <>
      <Header />
      <ToastContainer />
      <ContainerL>
        <AddNews>
          <NewsAdd>
          <Title addnews>Últimas notícias</Title>
          { authUser.authenticated && 
          <ButtonStyled onClick={() => setModalVisible(true)}>Adicionar notícia</ButtonStyled>
          }
          {
            modalVisible &&
            <Modal onClose={() => setModalVisible(false)} refreshList={refreshList}/>
          }
          </NewsAdd>
          <Search>
            <Input value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Buscar notícia por título ou conteúdo" />
            <ButtonStyled searchButton onClick={searchB}>Pesquisar</ButtonStyled>
          </Search>
        </AddNews>
        {
          loading &&
          <Fragment>
            Carregando...
          </Fragment>
        }
        { authUser.authenticated &&
          notices.map(notice => (
            <Link to={`news/${notice.id}`} key={notice.id}>
              <ImgLoad src={notice.image} alt="imagem da noticia" />
              <NewsText>
                <Title news>{notice.title}</Title>
                <TextContent>{notice.content}</TextContent>
                <OpenNews>Ler notícia completa</OpenNews>
              </NewsText>
            </Link>
          ))
        }
        { !authUser.authenticated &&
          notices.map(notice => (
            <LinkD onClick={() => setLoginVisible(true)} key={notice.id}>
              <ImgLoad src={notice.image} alt="imagem da noticia" />
              <NewsText>
                <Title>{notice.title}</Title>
                <TextContent>{notice.content}</TextContent>
                <OpenNews>Ler notícia completa</OpenNews>
              </NewsText>
            </LinkD>
          ))
        }
         {
              loginVisible &&
              <Login onClose={() => setLoginVisible(false)}/>
            }
      </ContainerL>
    </>
  )
}
