import styled from "styled-components";

export const Container = styled.div`
background-color: purple;
padding: 20px;

border-radius: 10px;



h1 {
    color: aliceblue;
    margin-bottom: 10px;
}

input {
    height: 35px;
    width: 200px;
    outline: none;
    margin-top: 5px;
    padding-left: 10px;
    border-radius: 5px;
    border: none;
}

`

export const ErrorInput = styled.div`
display: none;
margin-top: 8px;
padding-top: 9px;
font-size: 14px;
height: 35px;
color: white;
background-color: red;
border-radius: 5px;
text-shadow: 0px 0 1px black;
text-align: center;
`

export const BtnAdd = styled.button`
background-color: green;
color: white;
height: 35px;
border: none;
border-radius: 5px;
padding: 5px 10px;
margin-left: 20px;
cursor: pointer;
transition: 0.3s;

&:hover{
    opacity: 0.8;
}

`

export const TrashBtn = styled.button`
position: relative;
left: 10.5px;
border: none;
border-radius: 0px 5px 5px 0px;
background-color: green;
color: white;
height: 35px;
padding: 5px 10px;

cursor: pointer;
transition: 0.3s;

&:hover{
    opacity: 0.8;
}
`

export const Produto = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-weight: 500;
font-size: 18px;
background-color: white;
border-radius: 5px;
height: 35px;
margin-top: 20px;
padding: 0 10px;

`