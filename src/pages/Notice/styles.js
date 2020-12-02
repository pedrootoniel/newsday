import styled, { css } from 'styled-components'
import { shade } from 'polished'

export const ContainerNotice = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const News = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  background: var(--color-background);
  margin-top: 20px;
  border-radius: 20px;
  padding-bottom: 20px;
  margin-bottom: 20px;

  hr {
    width: 700px;
  }
`

export const Img = styled.img`
  height: 466px;
  width: 800px;
  border-radius: 20px 20px 0 0;
`

export const Title = styled.strong`
  margin: 20px 52px 20px 52px;
  font-size: 24px;
  text-align: justify;

  ${props => props.chevron && css`
    margin: 0;
  `}
`

export const ContentNews = styled.p`
  margin: 0 52px 50px 52px;
  text-align: justify;
`

export const TitleComment = styled.span`
  font-size: 20px;
  margin-top: 20px;
  margin-right: 580px;
`

export const NewComment = styled.div`
  display: flex;
  margin-top: 20px;
  width: 700px;
`

export const Input = styled.input`
  flex: 1;
  height: 50px;
  outline: none;
  padding-left: 20px;
  border: 1px solid var(--color-border);
  border-radius: 20px 0 0 20px;
`

export const Button = styled.button`
  width: 150px;
  border: 0;
  outline: none;
  border-radius: 0 20px 20px 0;
  background: var(--color-button);
  color: var(--color-background);
  font: 400 14px Roboto;
  border: 0;
  border-radius: 0 20px 20px 0;
  transition: 0.2s;
  cursor: pointer;

  &:hover{
    background: ${shade(0.2, '#53B4CF')};
  }
`

export const Comments = styled.div`
  display: flex;
  width: 700px;
  padding-top: 20px;

  & + div {
    padding: 0;
  }
`

export const ImgComment = styled.img`
  width: 40px;
  height: 40px;
  background: var(--color-background-geral);
  border-radius: 50%;
  object-fit: cover;
`

export const UserComment = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--color-comments);
`

export const NameUser = styled.strong`
  margin-left: 10px;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
`

export const CommentUser = styled.p`
  margin-left: 10px;
  margin-bottom: 20px;
  margin-top: 0;
  flex-wrap: wrap;
  overflow: hidden;
  text-align: justify;
`

export const Chevron = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 800px;
  padding: 20px;

  strong {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    font-size: 24px;
  }

  a{
    text-decoration: none;
    color: #000;
  }
`