import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import Logo from '../../assets/logo.png'
import {
  ContainerModal,
  Wrapper,
  LogoImg,
  SpanText,
  Form,
  Input,
  Button
} from './styles'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAuth } from '../../App'


function SignUp({ id = 'modal', onClose = () => { } }) {
  const { setAuthUser } = useAuth()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [comppass, setComppass] = useState('')
  const [loading, setLoading] = useState(false)

  const erroSignUp = () => toast.error("Erro ao cadastrar usuário!")
  const errorCamp = () => toast.error("Todos os campos devem ser preenchidos!")
  const errorConf = () => toast.error("As senhas são diferentes!")

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => document.body.style.overflow = 'unset'
  }, [])

  const addUser = () => {
    setLoading(true)
    if (!name || !email || !password || !comppass) {
      return errorCamp()
    } if (password !== comppass) {
      return errorConf()
    }

    api.post('/users', { name, email, password }).then(resp => {
      if (resp.data.success) {
        setLoading(false)
        onClose(false)
        setAuthUser({ authenticated: true, userId: resp.data.user_id })
        localStorage.setItem('userId', resp.data.user_id)
        return
      }
      alert(resp.data.message)

    }).catch((err) => {
      erroSignUp()
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
        <SpanText>Criar uma conta</SpanText>
        <Form>
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Nome"
          />
          <Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <Input
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Senha"
            type="password"
          />
          <Input
            value={comppass}
            onChange={e => setComppass(e.target.value)}
            placeholder="Confirmar senha"
            type="password"
          />
          <Button
            submit
            onClick={addUser}
          >{loading ? 'Carregando...' : 'Criar'}</Button>
        </Form>
      </Wrapper>
    </ContainerModal>
  )
}

export default SignUp
