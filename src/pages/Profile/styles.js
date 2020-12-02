import styled, {css} from 'styled-components'
import {shade} from 'polished'

export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  background: var(--color-background);
  border-radius: 20px;
`

export const Span = styled.span`
  display: flex;
  align-items: center;
  padding: 40px;
  font-size: 20px;

  ${props => props.message && css`
    padding: 20px 10px;
    font-size: 14px;
    color: var(--color-gray-text);

  `}
`

export const ImgProfile = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid var(--color-border);
`

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`

export const Input = styled.input`
  flex: 1;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 14px;
  outline: none;

  & + input {
    margin-top: 10px;
  }
`

export const Button = styled.button`
  background: var(--color-button);
  color: var(--color-background);
  font: 400 14px Roboto;
  outline: none;
  height: 45px;
  width: 150px;
  border: 0;
  align-self: center;
  margin: 20px;
  border-radius: 20px;
  transition: 0.2s;
  cursor: pointer;

  &:hover{
    background: ${shade(0.2, '#53B4CF')};
  }
`