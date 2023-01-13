import styled from 'styled-components';
import profileImg from '../../assets/profile2.webp';


export const HeaderContainer = styled.div`
    display : flex;
    justify-content : space-between;
`

export const Left = styled.div`
    flex-basis : 45%;
    width : 45%;
    display : flex;
    justify-content : space-between;
    align-items : center;
`

export const Right = styled.div`
    flex-basis : 45%;
    width : 45%;
    display : flex;
    justify-content : space-between;
    align-items : center;
`

export const Title = styled.h1`
    color : black;
`

export const Date = styled.strong`
    font-size : 16px;
    color : black;
    font-weight : 500;
    margin-right : 10px;
`

export const Double = styled.div`
    display : flex;
    align-items : flex-start;
`

export const HeaderImage = styled.div`
  background-image: url(${profileImg});
  border-radius : 50%;
  width : 50px;
  height : 50px;
`;

