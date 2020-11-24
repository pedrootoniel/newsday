import styled from 'styled-components'

export const ReadNewsStyled = styled.div`
    
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-bottom: 40px;

    .content{
        width:800px;
        display:flex;
        flex-direction:column;
        justify-content:justify;
        margin-top:20px;
        background:white;
        border-radius:30px;
        padding-bottom: 40px;

        strong{
            display:flex;
            margin-top:18px;
            margin-left:30px;
            font-size:24px;
            margin-right:30px;
        }

        p{
            text-align:justify;
            margin-top:18px;
            margin-left:30px;
            margin-right:30px;     
            padding-bottom:50px;
        }

        hr{
            width:700px;
            margin-left:30px;
        }

        img{
            height: 466px;
            width: 800px;
            border-radius: 20px 20px 0 0;
            object-fit: cover;
        }

    /*Content 1 Comentarios*/
        .comentario{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;

            input{
                width:475px;
                height:45px;
                outline:none;
                display:flex;
                margin-top:20px;
                margin-right:20px;
                text-indent:20px;
            }

            button{
                width:138px;
                height:45px;
                margin-top:15px;
                background: #53B4CF;
                color:white;
                font-weight:bold;
                font-size:16px;
                border-radius: 30px;
                outline:none;
                cursor: pointer;

                &:hover{
                    font-size:20px;
                    color:red;
                    background:black;
                }
            }
        }

        .image-user{
            width:700px;
            display:flex;
            justify-content:center;
            align-items:center;
            padding-top:20px;
            margin-left:20px;
            
            img{
                border-radius:50%;
                border:2px solid #ccc;
                width:32px;
                height:32px;   
                display:flex;
            }
        }

        .user-comentario{

            display:flex;
            flex-direction:column;
            justify-content:justify;

            strong{
                width: 157px;
                height: 19px;
                font-family: Roboto;
                font-style: normal;
                font-weight: bold;
                font-size: 18px;
                line-height: 19px;
                color: #333333;
                display:flex;
            }
        }
   
}

.new{
    display:flex;
    justify-content:center;
    align-items:center;
}
`