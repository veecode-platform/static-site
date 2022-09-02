import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vh;
    width: 100%;
    max-width: 415px;
    justify-content: center;
    padding: 0.5vh 1vw;

    @media (max-width: 415px) {
        align-items: center;
        padding: 0.5vh 0.5vw;
    }
`;