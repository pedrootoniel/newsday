import React, { useState, useEffect } from 'react'
import Logo from '../../assets/logo.png'
import api from '../../services/api'
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
import { useAuth } from '../../App';

function Login({ id = 'modal', onClose = () => { } }) {
  const errorLogin = () => toast.error("Erro ao fazer login!")

  const { authUser, setAuthUser } = useAuth();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => document.body.style.overflow = 'unset'
  }, [])

  const submitLogin = () => {
    setLoading(true)
    api.post('/sessions', { email, password }).then(resp => {
      setLoading(false)
      if (resp.data.success) {
        onClose(false)
        setAuthUser({ authenticated: true, userId: resp.data.user_id })
        localStorage.setItem('user_id_newspaper', resp.data.user_id)
        return
      }
      alert(resp.data.message)
    }).catch((err) => {
      setLoading(false)
      return errorLogin()
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
        <SpanText>Faça login para continuar</SpanText>
        <Form>
          <Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
          />
          <Input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Senha"
          />
          <Button
            submit
            onClick={submitLogin}
          >{loading ? 'Carregando...' : 'Entrar'}</Button>
        </Form>
      </Wrapper>
    </ContainerModal>
  )
}

export default Login