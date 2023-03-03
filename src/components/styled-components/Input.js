import styled from "styled-components";

const Input = styled.input`
    padding: 10px;
    border-radius: 6px;
    color: rgba(0, 0, 0, 0.774);
    transition: all 0.2s;
    &:focus {
        box-shadow: 0 0 6px 2px #00000033;
    }
`;

export default Input;