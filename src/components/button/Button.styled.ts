import styled from "styled-components";

export const SButtonContainer = styled.div<{stateX: number, stateY: number}>`
    width: 170px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: ${({stateY}) => stateY}%;
    left: ${({stateX}) => stateX}%;
`

export const SButton = styled.button`
    width: 120px;
    height: 25px;
    color: #FFFFFF;
    border-radius: 5px;
    border-color: #193a9c;
    background-color: #193a9c;
    cursor: pointer;
`