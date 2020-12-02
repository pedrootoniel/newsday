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
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  width: 350px;
  background: var(--color-background);
  border-radius: 20px;
`

export const LogoImg = styled.img`
  width: 200px;
  height: 80px;
  padding: 20px;
  object-fit: cover;
`

export const SpanText = styled.span`
  margin: 27px 20px;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 30px;
`

export const Input = styled.input`
  flex: 1;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 14px;
  outline: none;

  & + input {
    margin-top: 20px;
  }
`

export const Button = styled.button`
  background: var(--color-button);
  color: var(--color-background);
  font: 400 14px Roboto;
  outline: none;
  height: 45px;
  border: 0;
  border-radius: 20px;
  transition: 0.2s;
  cursor: pointer;

  &:hover{
    background: ${shade(0.2, '#53B4CF')};
  }

  ${props => props.submit && css`
    align-self: center;
    margin: 20px;
    width: 150px;
  `}
`