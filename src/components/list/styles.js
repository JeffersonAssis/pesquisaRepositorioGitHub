import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;
  
  h3{
    font-size: 32px;
    color: #fafafa;

  }
  p{
    font-size:10px;
    color: #fafafa60;
    margin-bottom: 20px;
  }
  div.links{
    displey:flex;
    flex-direction:row;
   
  }
  a{
    margin-top: 20px;
    cursor: pointer;
    text-decoration: none;
    color: #66e49a;
    margin-bottom: 10px;    
  }
  a.remover{
    color: #ff0000;
    margin-left: 30px;
  }
  hr{
    margin-bottom:10px;
    color: #8f8d8db0;
  }
  
`