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
   
   <input type="search" placeholder="Search News"/>

{ !auth.authUser.authenticated &&   <Nav>
    <Button onClick={()=> setSingupVisible(true)}>Singup</Button>
    {
      singupVisible &&
      <Singup onClose={()=> setSingupVisible(false)}/>

     
    }


    <Button onClick={()=> setLoginVisible(true)}>Login</Button>
    {
      loginVisible &&
      <Login onClose={()=> setLoginVisible(false)}/>


     
    }


    </Nav>}

{ auth.authUser.authenticated &&   
    <Nav>
    <Link to="/">Home</Link>
  

    <Link to="/">My News</Link>
    <Link to="/profile/">Profile</Link>

    <Button onClick={()=> {
      localStorage.removeItem('userId');
      auth.setAuthUser({ authenticated: false})
      
    }}>Logout</Button>


    </Nav>}


    </Container>

</HeaderStyled>

)
}

export default Header;