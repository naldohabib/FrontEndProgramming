// import styled component
import styled, { css } from "styled-components";

// membuat component button
const Button = styled.button`
    padding: 1rem;
    border-radius: 10px;
    color: #fff;
    border: none;
    cursor: pointer;
    margin-top: auto;

    // props variant
    background-color: ${({ theme, variant }) => theme.colors[variant] || theme.colors.primary};

    // props full
    ${(props) => props.full && css`
        display: block;
        width: 100%
    `}

    // props size
    font-size: ${({ theme, size }) => theme.sizes[size] || theme.sizes.small};
`;

// export button
export default Button;