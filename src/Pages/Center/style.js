import styled from 'styled-components'

export const CenterStyled = styled.div `

        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding:20px;


            a{
            height: 200px;
            width: 800px;
            margin-top:20px;
            border-radius: 30px;
            background: #FFFFFF;
            border: 1px solid #DDDDDD;
            box-sizing: border-box;
            display:flex;
            text-decoration:none;

            &+a{
            margin-top:20px;

        }

            .paragrafo{
                color:black;
                display:flex;
                flex-direction:column;
                strong{

                    margin-top:15px;
                    margin-left:10px;
                    font-size:20px;
                    margin-right:10px;

                }

                p{
                    margin-top:10px;
                    margin-left:10px;
                    margin-right:10px;
                    font-size:18px;

                }

                span{

                    margin-top:10px;
                    margin-left:350px;
                    margin-right:10px;
                    font-size:18px;
                    color:#53B4CF;

                }

                

            }

            img{
                width: 250px;
                height: 200px;
                object-fit:cover;
                border-radius:30px;
            }

            a{
                text-decoration:none;
            }
            
            }



`

export const BoxNews = styled.div`

        display:flex;
        flex-direction:column;
        align-items:center;
        padding:20px;
        height:112px;
        width:760px;
        background:white;
        border-radius: 30px;  
        font-size:24px; 


`

export const Button = styled.button`

            align-self: flex-end;
            height:45px;
            color:white;
            outline:none;
            padding:10px;
            border:0;
            border-radius: 30px;
            background:#53B4CF;
            margin-top:45px;

            :hover{

                background:black;
                color:white;
            }




`
