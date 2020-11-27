import styled from 'styled-components'

export const Container = styled.div`
    top:0;
    bottom:0;
    left:0;
    right:0;
    background:rgba(0,0,0,.5);
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:10;
    position: absolute;    
`
export const Wraper = styled.div`

    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:350px;
    background:white;
    padding:20px;
    border-radius:30px;

`
export const ImgLogo = styled.img`

  padding:20px;
`
export const Span = styled.span`

  padding:20px;
  font-size:20px;
`
export const Input = styled.input`
  padding:10px;
  width:320px;
  margin-top:10px;
  border-radius: 30px;
  outline:none;
  border:1px solid #ccc;
`
export const Button = styled.button`
  padding:10px;
  margin-top:10px;
  border-radius: 30px;
  outline:none;
  background:#53B4CF;
  color:white;
  border:0;

  :hover{

      color:wihte;
      background:green;
  }

`

