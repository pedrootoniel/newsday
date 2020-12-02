import React, { useState, useRef, useEffect } from 'react'
import api from '../../services/api'
import {
  ContainerModal,
  Wrapper,
  ImgNews,
  SpanText,
  Form,
  InputsImg,
  Input,
  TextArea,
  Button,
  Buttons
} from './styles'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MdAddAPhoto } from 'react-icons/md'


const EditNews = ({ id = 'modal', onClose = () => { }, editNews, refreshList }) => {
  const errorAdd = () => toast.error("Erro ao carregar os dados da notícia!")
  const errorNotice = () => toast.error("Todos os campos devem ser preenchidos")

  const inputFile = useRef(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [file, setFile] = useState('')
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setFile(editNews.image)
    setTitle(editNews.title)
    setContent(editNews.content)

    document.body.style.overflow = 'hidden'
    return () => document.body.style.overflow = 'unset'
  }, [])

  const submitNotice = () => {

    if (!title || !content) {
      return errorNotice()
    }

    const formData = new FormData();
    if (inputFile.current.files[0]) {
      formData.append('file', inputFile.current.files[0])
    }
    formData.append('title', title)
    formData.append('content', content)
    formData.append('news_id', editNews.id)
    api.put('/news', formData).then(resp => {
      if (resp.data.success) {
        refreshList()
        onClose(false)
        return
      }
      alert(resp.data.message);

    }).catch((err) => {
      errorAdd()
    })
  }

  const removeNews = () => {
    setLoading(true)
    api.delete(`/news/${editNews.id}`).then(resp => {
    setLoading(false)
      refreshList()
      onClose(false)
      return alert('Noticia excluída!')
    })
  }

  const handleOutSide = (e) => {
    if (e.target.id === id) onClose()
  }
  return (
    <ContainerModal id={id} onClick={handleOutSide}>
      <ToastContainer />
      <Wrapper>
        <SpanText>Editar notícia</SpanText>
        <ImgNews src={file} alt="Imagem da notícia" />
        <MdAddAPhoto
          size={20}
          onClick={() => inputFile.current.click()}
          style={{
            marginLeft: '200',
            color: 'var(--color-comments)', cursor: 'pointer'
          }} />
        <Form>
          <InputsImg>
            <Input
              type="file"
              ref={inputFile}
              accept='image/png, image/jpeg'
              style={{ display: 'none' }}
              onChange={e => {
                const linkImage = URL.createObjectURL(inputFile.current.files[0])
                setFile(linkImage)
              }}
            />
          </InputsImg>
          <Input
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
          <Buttons>
            <Button
              delete
              onClick={removeNews}>{loading ? 'Carregando...' : 'Excluir'}</Button>
            <Button
              submit
              onClick={submitNotice}>{loading ? 'Carregando...' : 'Salvar'}</Button>
          </Buttons>
        </Form>
      </Wrapper>
    </ContainerModal>
  )
}

export default EditNews