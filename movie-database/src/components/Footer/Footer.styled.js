import styled from "styled-components";

const StyledFooter = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    padding: 1rem;
    text-align: center;

    h2 {
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 1rem;
    }
`;

export default StyledFooter;