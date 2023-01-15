import styled from "styled-components";

export const Container = styled.div`
    display : flex;
    flex-direction : column;
    justify-content: space-between;
    align-items : center;
    padding : 10px 8px 16px 8px;
    border-radius: 12px;
    border : ${({ color }) => color === "black" ? "2px solid black" : "none" };
    cursor : pointer;
`

export const ImageContainer = styled.div`
    background-color : ${({ color }) => color === "black" ? "transparent" : "#ffe7df" };
    display : flex;
    flex-direction : column;
    justify-content: space-between;
    align-items : center;
    height : 65px;
    width : 65px;
    border-radius : 9px;
    padding : 10px 7px;
`

export const Time = styled.strong`
    color : ${({ color }) => color === "black" ? "black" : "#aaa6a6" };
`