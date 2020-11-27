import React,{useState} from 'react';
import { Link } from 'react-router-dom'
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
    <Link to="/">Notícias</Link>
  


    <Link to="/profile/user">Meus Dados</Link>

    <Button onClick={()=> {
      localStorage.removeItem('userId');
      auth.setAuthUser({ authenticated: false})
      
    }}>Sair</Button>


    </Nav>}


    </Container>

</HeaderStyled>

)
}

export default Header;