import React, { useState, useEffect } from 'react'
import {
  ContainerNotice,
  News,
  Img,
  Title,
  ContentNews,
  TitleComment,
  NewComment,
  Chevron,
  Input, Button,
  Comments,
  ImgComment,
  UserComment,
  NameUser,
  CommentUser
} from './styles'
import { FiChevronsLeft } from 'react-icons/fi'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import api from '../../services/api'
import { useAuth } from '../../App'
import Header from '../../components/Header'
import User from '../../assets/user.png'
import { Link } from 'react-router-dom'

function Notice({ match }) {
  const { authUser } = useAuth()
  const [news, setNews] = useState('')
  const [text, setText] = useState('')
  const [comments, setComments] = useState([])

  const Success = () => toast.success("Comentário adicionado")
  const ErrorNotice = () => toast.error("Erro ao carregar a notícia!")
  const ErrorComment = () => toast.error("Erro ao adicionar o comentário!")

  useEffect(() => {
    api.get(`/news/${match.params.id}`).then(resp => {
      if (resp.data.success) {
        setNews(resp.data.news)
        return setComments(resp.data.news.comments)
      } alert(resp.data.message)
    }).catch((err) => {
      ErrorNotice()
    })
  }, [match.params.id])

  const submitComment = () => {
    api.post('/comments', { text, news_id: match.params.id, user_id: authUser.userId }).then(resp => {
      if (resp.data.success) {
        setText('')
        Success()
        setComments([resp.data.comment, ...comments])
      }
    }).catch((err) => {
      ErrorComment()
    })
  }

  return (
    <>
      <Header />
      <ToastContainer />
      <ContainerNotice>
        <Chevron>
          <Link to="/">
            <FiChevronsLeft onClick="/" size={20} style={{ cursor: 'pointer' }} /></Link>
          <strong>Detalhes da Notícia</strong>
        </Chevron>
        <News>
          <Img src={news.image} alt="" />
          <Title>{news.title}</Title>
          <ContentNews>{news.content}</ContentNews>
          <hr />
          <TitleComment>Comentários</TitleComment>
          <NewComment>
            <Input
              type="text"
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <Button onClick={submitComment}>Comentar</Button>
          </NewComment>
          {
            comments.map(comment => (
              <Comments key={comment.id}>
                <ImgComment src={comment.user_photo || User} alt="Photo de perfil" />
                <UserComment className="user-comments">
                  <NameUser>{comment.user_name}</NameUser>
                  <CommentUser>{comment.text}</CommentUser>
                </UserComment>
              </Comments>
            ))
          }

        </News>

      </ContainerNotice>
    </>
  )
}

export default Notice