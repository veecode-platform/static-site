import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vh;
    width: 100%;
    max-width: 415px;
    min-height: 160px;
    justify-content: center;
    padding: 0.5vh 1vw;

    @media (max-width: 415px) {
        align-items: center;
        padding: 0.5vh 0.5vw;
    }
`;

export const Loading = styled.span`
    width: 1.1vw;
    height: 1.1vw;
    border: 3px solid $color1;
    margin-right: 0.5vw;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    } 
`;