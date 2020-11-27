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
                    padding:0 20px;
                    margin-right:10px;
                    color:black;
                    outline:none;
                    cursor:pointer;
                    background:#4444;
               :hover{
                     
                       color:white;
               }
`

export const Nav = styled.div`

        display:flex;
        align-items:center;

        a{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    border:0;
                    width:180px;
                    padding: 8px 0;
                    border-radius:30px;
                    max-height:25px;
                    margin:0 10px;
                    font-size:20px;
                    color:black;
                    background:#4444;
                    cursor:pointer;
                    outline:none;
                    text-decoration:none;

               :hover{
                     
                       color:white;
               }


        }       

`
