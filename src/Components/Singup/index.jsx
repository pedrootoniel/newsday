import React, { useState } from 'react';
import { Container, Wraper, ImgLogo, Span, Input, Button } from './style'
import Logo from '../../assents/logo.png'
import api from '../../services/api';
import {useAuth} from '../../App'
// import { Container } from './styles';

function Singup({ id = "modal", onClose = () => { } }) {

  const {setAuthUser}= useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConf, setPasswordConf] = useState('')

  const submit = () => {

    if (!name || !email || !password || !passwordConf) {
      return alert('Todos os Campos são obrigatorio o Preenchimento.')

    }

    if (password !== passwordConf) {
      return alert('Senhas não são iguais, Por favor verificar.')
    }

    api.post('/users', { name, email, password }).then(resp => {
      if (resp.data.success) {
        onClose(false)
        setAuthUser({ authenticated: true, userId: resp.data.user_id });
        localStorage.setItem('userId', resp.data.user_id);
        return alert('Usuario Cadastrado!! Seja bem vindo!!')

      }
      alert(resp.data.message)

    }

    ).catch((err) => {
      alert('Erro ao Cadastrar seu usuário.')
    })

  }




  const Closed = (e) => {
    if (e.target.id === id) onClose()
  }

  return (


    <Container id={id} onClick={Closed}>


      <Wraper>

        <ImgLogo src={Logo} />

        <Span>Faça login para continuar</Span>


        <Input value={name} onChange={e => setName(e.target.value)} placeholder="Nome." />
        <Input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email." />
        <Input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Senha." />
        <Input value={passwordConf} onChange={e => setPasswordConf(e.target.value)} type="password" placeholder="Confirme a Senha." />

        <Button onClick={submit}>Criar Conta</Button>


      </Wraper>


    </Container>




  )
}

export default Singup;