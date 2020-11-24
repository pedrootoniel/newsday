import React,{useState} from 'react';
import { HeaderStyled,Imglogo,Container,Button } from './style'
import Logo from '../../assents/logo.png'
import News from '../../Components/News'

// import { Container } from './styles';

function Header() {
  const [newsVisible, setNewsVisible]= useState(false)
  return(
<HeaderStyled>

    <Container>

   <Imglogo src={Logo}/>

   
    <Button type="text" onClick={()=> setNewsVisible(true)}>Adicionar notícia</Button>
    {
      newsVisible &&
      <News onClose={()=> setNewsVisible(false)}/>

     
    }

    </Container>

</HeaderStyled>



  )
  {

  }
}
export default Header;