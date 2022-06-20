import styled from "styled-components";

const StyledHero = styled.div`
    margin: 1rem;

    section {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    h2 {
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: 1rem;
        font-size: 2.44rem;
    }

    h3 {
        color: ${({ theme }) => theme.colors.secondary};
        margin-bottom: 1rem;
        font-size: 1.59rem;
    }

    p {
        color: ${({ theme }) => theme.colors.tertiary};
        margin-bottom: 1rem;
    }

    img {
        max-width: 100%;
        height: auto;
        border-radius: 25px;
    }

    

    @media (min-width: 992px) {
        max-width: 1200px;
        margin: 3rem auto;

        section {
            margin: 0 1rem;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: left;
        }

        div {
            flex-basis: 40%;
        }

        p {
            margin-bottom: 3rem;
        }

    }
`;

export default StyledHero;