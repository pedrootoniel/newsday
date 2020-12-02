import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 60px;
  background: var(--color-background);
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.2);
  padding: 0 30px;
`

export const LinkImg = styled.a`
  text-decoration: none;
  height: 60px;
  width: 200px;
`

export const ImgLogo = styled.img`
  width: 200px;
  height: 60px;
  object-fit: cover;
`

export const Nav = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: #000;
    padding: 20px;
    cursor: pointer;
    transition: 0.2s;
    background:#4444;
               :hover{
                     
                       color:white;
               }
  }
`

export const LinkLogin = styled.button`
  text-decoration: none;
  border: 0;
  background: transparent;
  outline: none;
  color: #000;
  padding: 20px;
  cursor: pointer;
  transition: 0.2s;
  background:#4444;
               :hover{
                     
                       color:white;
               }
`