import styled from "styled-components";
import Myimg from '../../assets/pers1.jpg';




export const Container = styled.div`
    display : flex;
    justify-content : space-between;
    width : 100%;
    padding : 0px 20px;
    height : 105px;
    align-items : center;
    background-color : ${({ color }) => color === "black" ? "black" : "white" };
    color : ${({ color }) => color === "black" ? "white" : "black" };
    border-radius : 10px;
    margin-bottom : 15px;
    box-shadow: 5px 5px 5px #ddd;
    cursor : pointer;
`

export const Section= styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
`

export const ImageContainer = styled.div`
    background-color : ${({ color }) => color === "black" ? "white" : "#ffe7df" };
    height : 50px;
    width : 50px;
    border-radius : 7px;
    display : flex;
    justify-content : center;
    align-items : center;
    margin-right : 22px;
`

export const Images = styled.div`
    display : flex;
`

export const HeaderImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius : 50%;
    margin-left : -6px;
`

export const Title = styled.h4`
`

export const Date = styled.p`
    color : #414141;
`

export const Column = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : space-between;   
    height : 45px; 
`

HeaderImg.defaultProps = {
    src: Myimg,
  };
