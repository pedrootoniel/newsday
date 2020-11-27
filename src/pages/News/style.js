import styled from 'styled-components'

export const NewsStyled = styled.div`
                
    .center{
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
        .form{
                width: 650px;
                border-radius: 30px;
                background: #FFFFFF;
                overflow:auto;
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;
                p{
                width: 491px;
                height: 7px;
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                line-height: 21px;
                color: #333333;
                display:flex;
                }
                .img{
                    width:150px;
                    height:166px;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    display:flex;
                }
            .search-img{
                display:flex;
                margin-top:40px;
                    
                input{
                height: 50px;
                width:400px;
                margin-top:20px;
                padding-left:10px;
                border-radius: 30px 0 0 30px;
                background: #FFFFFF;
                border: 1px solid #AAAAAA;
                box-sizing: border-box;
                outline:0;
                text-indent:10px;
                    }
            
                &:hover{
                    color:black;
                    background: white;
                }
                button{
                        border:0;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        height: 50px;
                        width: 174px;
                        margin:20px;
                        margin-left:0;
                        font-family: Roboto;
                        color:white;
                        font-size:20px;
                        border-radius: 0 20px 20px 0;
                        background: #53B4CF;
                        outline:none;
                    &:hover{
                            font-size:30px;
                            color:white;
                            background: green;
                    }
                    }
 
                }
                        
            }
                    .add-news{
                        display:flex;
                        flex-direction:column;
                        margin-top:20px;
                        
                        
                        
                    input{
                        height: 50px;
                        width:600px;
                        margin:20px;    
                        padding-left:10px;
                        border-radius: 30px;
                        background: #FFFFFF;
                        border: 1px solid #AAAAAA;
                        box-sizing: border-box;
                        outline:none;
                        text-indent:15px;
                    
                    }
                    button{
                        border:0;
                        display:flex;
                        align-items:center;
                        align-self:flex-end;
                        justify-content:center;
                        margin:20px;
                        height: 50px;
                        width: 174px;
                        font-family: Roboto;
                        color:white;
                        font-size:20px;
                        border-radius: 30px;
                        background: #53B4CF;
                        outline:none;
                    &:hover{
                            font-size:30px;
                            color:white;
                            background: black;
                    }
                    }
                textarea{
                width: 600px;
                height: 232px;
                margin-left:20px;
                padding-left:20px;
                resize:none;
                background: #FFFFFF;
                border: 1px solid #AAAAAA;
                box-sizing: border-box;
                border-radius: 30px;
                display:flex;
                outline:none;
                text-indent:30px;
              
                }
                    }
                    
        }
`





/* .input{
height: 50px;
padding-left:10px;
border-radius: 30px;
background: #FFFFFF;
border: 1px solid #AAAAAA;
box-sizing: border-box;
flex:1;
}
.button{
border:0;
display:flex;
align-items:center;
justify-content:center;
color:blue;
height: 50px;
width: 174px;
font-family: Roboto;
color:white;
font-size:20px;
border-radius: 30px;
background: #53B4CF;
&:hover{
    background: black;
}
}
.textarea{
width: 529px;
height: 232px;
padding-left:20px;
resize:none;
background: #FFFFFF;
border: 1px solid #AAAAAA;
box-sizing: border-box;
border-radius: 30px;
display:flex;
scroll-behavior: inherit;
} */