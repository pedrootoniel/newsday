<<<<<<< HEAD
import React,{useState} from 'react';
import { HeaderStyled,Imglogo,Container,Button,Nav } from './style'
import Logo from '../../assents/logo.png'
import Singup from '../../Components/Singup'
import Login from '../../Components/Login'

import { useAuth } from '../../App'

// import { Container } from './styles';

function Header() {

  const auth = useAuth();

  const [loginVisible, setLoginVisible]= useState(false)
  const [singupVisible, setSingupVisible]= useState(false)


  return(
<HeaderStyled>

    <Container>

   <Imglogo src={Logo}/>

{ !auth.authUser.authenticated &&   <Nav>
    <Button onClick={()=> setSingupVisible(true)}>Criar Conta</Button>
    {
      singupVisible &&
      <Singup onClose={()=> setSingupVisible(false)}/>

     
    }


    <Button onClick={()=> setLoginVisible(true)}>Fazer Login</Button>
    {
      loginVisible &&
      <Login onClose={()=> setLoginVisible(false)}/>


     
    }


    </Nav>}

{ auth.authUser.authenticated &&   
    <Nav>
    <Button>Notícias</Button>
  


    <Button>Meus Dados</Button>

    <Button onClick={()=> {
      localStorage.removeItem('userId');
      auth.setAuthUser({ authenticated: false})
      
    }}>Sair</Button>


    </Nav>}


    </Container>

</HeaderStyled>


=======
import React, { useState } from 'react';
import { HeaderStyled, Imglogo, Container, Button } from './style'
import Logo from '../../assents/logo.png'
import ModalNews from '../../Components/ModalNews'

function Header() {
>>>>>>> e5b260e311491ff955c428d0ce4a7d5e6e52cc9b

  const [newsVisible, setNewsVisible] = useState(false)

  return (
    <HeaderStyled>
      <Container>
        <Imglogo src={Logo} />
        <Button type="text" onClick={() => setNewsVisible(true)}>Adicionar notícia</Button>
        {
          newsVisible &&
          <ModalNews onClose={() => setNewsVisible(false)} />
        }
      </Container>
    </HeaderStyled>
  )
}

export default Header;