import styled from "styled-components";
import Myimg from '../../assets/pers1.jpg';




export const Container = styled.div`
    display : flex;
    justify-content : space-between;
    width : 100%;
    padding : 0px 20px;
    height : 95px;
    align-items : center;
    background-color : black;
    color : white;
    border-radius : 7px;
    margin-bottom : 15px;
`

export const Section= styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
`

export const ImageContainer = styled.div`
    background-color : white;
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
    width: 36px;
    height: 36px;
    border-radius : 50%;
    margin-left : -6px;
`

export const Title = styled.h4`
    color : white;
`

export const Date = styled.p`
    color : #9da19e;
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
