import styled from 'styled-components';


export const Text = styled.p`
    color : ${({ color }) => color === "white" ? "white" : "#4d4d4d" };
    font-size : 20px;
    margin-left : 15px;
`

export const Double = styled.div`
    display : flex;
    align-items : center;
    margin : 18px 0;
    &:hover{
        cursor : pointer;
    }
`