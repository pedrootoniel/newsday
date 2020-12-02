import styled, { css } from 'styled-components'
import { shade } from 'polished'

export const ContainerModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  font-family: Roboto;
  overflow: hidden;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  width: 500px;
  background: var(--color-background);
  border-radius: 20px;
  padding: 20px;
`

export const ImgNews = styled.img`
  display: flex;
  border-radius: 20px;
  width: 200px;
  height: 150px;
  object-fit: cover;
`

export const SpanText = styled.span`
  padding-bottom: 20px;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 30px;
`

export const InputsImg = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  flex: 1;
  border: 1px solid var(--color-border);
  border-radius: 20px 0 0 20px;
  padding: 14px;
  outline: none;
  ${props => props.title && css`
    margin-top: 20px;
    height: 45px;
    border-radius: 20px;
  `}
`

export const TextArea = styled.textarea`
  margin-top: 20px;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  outline: none;
  font: 400 14px Roboto;
  padding: 15px;
  resize: none;
  height: 150px;
  &::placeholder {
    font-size: 14px;
  }
`

export const Button = styled.button`
  background: var(--color-button);
  color: var(--color-background);
  font: 400 14px Roboto;
  outline: none;
  height: 45px;
  border: 0;
  border-radius: 0 20px 20px 0;
  transition: 0.2s;
  cursor: pointer;
  &:hover{
    background: ${shade(0.2, '#53B4CF')};
  }
  ${props => props.search && css`
    width: 150px;
  `}
  ${props => props.submit && css`
    margin-top: 20px;
    width: 150px;
    border-radius: 20px;
  `}
  ${props => props.delete && css`
    margin-top: 20px;
    width: 150px;
    border-radius: 20px;
    background: #F04248;
    :hover{
      background: ${shade(0.2, '#F04248')}
    }
  `}
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`