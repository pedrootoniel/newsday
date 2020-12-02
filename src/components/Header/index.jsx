import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  ContainerHeader,
  LinkImg,
  ImgLogo,
  Nav,
  LinkLogin
} from './styles'
import Logo from '../../assets/logo.png'
import Login from '../Login'
import SignUp from '../SignUp'

import { useAuth } from '../../App';

function Header() {

  const { authUser, setAuthUser } = useAuth()

  const [loginVisible, setLoginVisible] = useState(false)
  const [signUpVisible, setSignUpVisible] = useState(false)


  return (
    <Container>
      <ContainerHeader>
        <LinkImg href="/">
          <ImgLogo src={Logo} />
        </LinkImg>
        {
          !authUser.authenticated &&
          <Nav>
            <LinkLogin onClick={() => setSignUpVisible(true)}>Criar conta</LinkLogin>
            {
              signUpVisible &&
              <SignUp onClose={() => setSignUpVisible(false)} />
            }
            <LinkLogin onClick={() => setLoginVisible(true)}>Fazer login</LinkLogin>
            {
              loginVisible &&
              <Login onClose={() => setLoginVisible(false)} />
            }
          </Nav>
        }
        {
          authUser.authenticated &&
          <Nav>
            <Link to="/">Início</Link>

            <Link to="/mynews/user/">Minhas Notícias</Link>

            <Link to="/profile/user" >Meus dados</Link>

            <LinkLogin onClick={() => {
              localStorage.removeItem('user_id_newspaper');
              setAuthUser({ authenticated: false });
            }}>Sair</LinkLogin>
          </Nav>
        }
      </ContainerHeader>
    </Container>
  );
}

export default Header;