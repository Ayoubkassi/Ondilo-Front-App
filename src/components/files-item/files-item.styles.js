import styled from "styled-components";

export const Container = styled.div`
    display : flex;
    justify-content : space-between;
    width : 100%;
    padding : 0px 20px;
    height : 95px;
    align-items : center;
    border-radius : 10px;
    margin-top : 20px;
    border : 2px solid black;
    cursor : pointer;
`

export const Section= styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
`
export const Title = styled.h4`
`

export const ImageContainer = styled.div`
    background-color : black;
    height : 50px;
    width : 50px;
    border-radius : 9px;
    display : flex;
    justify-content : center;
    align-items : center;
    margin-right : 22px;
`


export const Column = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : space-between;   
    height : 45px; 
`

export const Date = styled.p`
    color : #414141;
`
export const Weight = styled.p`
    color : #414141;
    margin-right : 15px;
`

export const Desc = styled.div`
    display : flex;
    align-items : center;
`