import React,{useState} from 'react';
import { Container, Wraper, ImgLogo, Span, Input, Button } from './style'
import Logo from '../../assents/logo.png'
import api from '../../services/api'
import {useAuth} from '../../App'


// import { Container } from './styles';

function Login({ id = "modal", onClose = () => { } }) {

  const { authUser, setAuthUser } = useAuth();

  console.log(authUser);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = () => {
    api.post('/sessions', {email, password}).then(resp => {
      console.log(resp.data)
      if(resp.data.success) {
        onClose(false)
        setAuthUser({ authenticated: true, userId: resp.data.user_id });
        localStorage.setItem('userId', resp.data.user_id);
        return alert('Login Realizado.')
      }
      alert(resp.data.message)
    }).catch((err) => {
      return alert('Erro ao realizar seu login.')
    })

  }


  const closed = (e) => {
    if (e.target.id === id) onClose()
  }

  return (


    <Container id={id} onClick={closed}>


      <Wraper>

        <ImgLogo src={Logo} />

        <Span>Faça login para continuar</Span>


        <Input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
        <Input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Senha" />

        <Button onClick={submit}>Login/Entrar</Button>


      </Wraper>


    </Container>




  )
}

export default Login;