/*STYLE FROM HEADER */

import styled from 'styled-components'

export const HeaderStyled = styled.div`
    background: white;
`

export const Imglogo = styled.img`
    object-fit:cover;
    width:200px;
    height:60px;
`

export const Container = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 20px;
    background:#ffffff;
    height:80px;
    box-shadow:2px 2px 2px 1px rgba(0,0,0,.2);
`

export const Button = styled.button`
    border:0;
    width:181px;
    height:40px;
    font-size:20px;
    border-radius:30px;
    color:white;
    background: #53B4CF;
    outline:none;

    &:hover{
        color:white;
        background: black;
    }
`



