import React, { useState, useRef, useEffect } from 'react'
import Logo from '../../assets/logo.png'
import api from '../../services/api'
import {
  ContainerModal,
  Wrapper,
  LogoImg,
  SpanText,
  Form,
  InputsImg,
  Input,
  TextArea,
  Button
} from './styles'
import { useAuth } from '../../App'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Modal = ({ id = 'modal', onClose = () => { }, refreshList }) => {
  const errorAdd = () => toast.error("Erro ao carregar a notícia!")
  const errorNotice = () => toast.error("Todos os campos devem ser preenchidos")

  const { authUser } = useAuth()

  const inputFile = useRef(null)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [file, setFile] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => document.body.style.overflow = 'unset'
  }, [])

  const submitNotice = () => {
    setLoading(true)

    if (!title || !content || !inputFile.current || !inputFile.current.files[0]) {
      return errorNotice()
    }

    const formData = new FormData();
    formData.append('file', inputFile.current.files[0])
    formData.append('title', title)
    formData.append('content', content)
    formData.append('user_id', authUser.userId)
    api.post('/news', formData).then(resp => {
      if (resp.data.success) {
        setLoading(false)
        refreshList()
        onClose(false)
        return
      }
      alert(resp.data.message);

    }).catch((err) => {
      errorAdd()
    })
  }

  const handleOutSide = (e) => {
    if (e.target.id === id) onClose()
  }
  return (
    <ContainerModal id={id} onClick={handleOutSide}>
      <ToastContainer />
      <Wrapper>
        <LogoImg src={Logo} alt="logo" />
        <SpanText>Preencha os campos abaixo para adicionar uma notícia.</SpanText>
        <Form>
          <InputsImg>
            <Input
              readOnly={true}
              placeholder="Adicionar foto"
              value={file}
            />
            <Input
              type="file"
              ref={inputFile}
              placeholder="Adicionar foto"
              accept='image/png, image/jpeg'
              style={{ display: 'none' }}
              onChange={e => setFile(inputFile.current.files[0].name)}
            />
            <Button
              search
              onClick={() => inputFile.current.click()}
              type="button">
              Pesquisar
              </Button>
          </InputsImg>
          <Input
            title
            placeholder="Título"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <TextArea
            placeholder="Conteúdo"
            className="content-input"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
          <Button
            submit
            onClick={submitNotice}>{loading ? 'Carregando...' : 'Adicionar'}</Button>
        </Form>
      </Wrapper>
    </ContainerModal>
  )
}

export default Modal