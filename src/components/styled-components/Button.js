import styled from "styled-components";

const Button = styled.button`
    padding: 10px;
    border-radius: 6px;
    background-color: rgb(64 59 59);
    color: #fff;
    transition: all 0.2s;
    &:hover {
        box-shadow: 0px 3px 3px #00000033;
        cursor: pointer;
    }
    &:active {
        transform: scale(0.98);
    }
`;

export default Button;