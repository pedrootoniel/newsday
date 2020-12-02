import styled, {css} from 'styled-components'
import {shade} from 'polished'

export const ContainerL = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;

  a{
    width: 800px;
    height: 200px;
    margin-top: 20px;
    background: var(--color-background);
    border-radius: 20px;
    text-decoration: none;
    display: flex;
  }
`

export const LinkD = styled.div`
  width: 800px;
  height: 200px;
  margin-top: 20px;
  background: var(--color-background);
  border-radius: 20px;
  text-decoration: none;
  display: flex;
  cursor: pointer;
`

export const ImgLoad = styled.img`
  width: 250px;
  height: 200px;
  border-radius: 20px 20px 0 20px;
  margin-right: 21px;
  object-fit: cover;

  -webkit-transition: -webkit-transform .5s ease;
   transition: transform .5s ease;

   :hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
   }
`

export const NewsText = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.strong`
  margin-top: 27px;
  margin-right: 27px;
  flex-wrap: wrap;
  color: var(--color-text);

  ${props => props.addnews && css`
    display: flex;
    justify-content: center;
    flex: 1;
    margin: 0;
    font-size: 24px;
  ` }
`

export const Search = styled.div`
  display: flex;
  padding-top: 20px;
`

export const Input = styled.input`
  flex: 1;
  border: 1px solid #ccc;
  padding-left: 10px;
  border-radius: 20px 0 0 20px;
  outline: none;
`

export const NewsAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const TextContent = styled.span`
  margin-top: 14px;
  margin-right: 27px;
  color: var(--color-gray-text);
  flex-wrap: wrap;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const OpenNews = styled.p`
  margin-top: 20px;
  margin-left: 350px;
  color: var(--color-button);

  &:hover{
    color: ${shade(0.2, '#53B4CF')};
  }
`

export const AddNews = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 150px;
  background: var(--color-background);
  margin-top: 20px;
  padding: 20px;
  border-radius: 20px;
`

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  background: var(--color-button);
  color: var(--color-background);
  height: 40px;
  border: none;
  border-radius: 20px;
  transition: 0.2s;
  cursor: pointer;
  padding: 0 30px;

  &:hover{
    background: ${shade(0.2, '#53B4CF')};
  }

  ${props => props.searchButton && css`
    border-radius: 0 20px 20px 0;
    width: 160px;
  `}
`