import styled from 'styled-components';


export const LabelWraper = styled.div`
    display: flex;
`;

export const Label = styled.label`
    color: ${props => props.error ? "red" : "white" };
    font-size: small;
    min-width: 50%;
    text-align: ${props => props.errorLabel ? "right" : "left"}
`;

export const InputField = styled.input`
    width: 100%;
    border-radius: 4px;
    height: 48px;
    outline: none;
    border: ${props => props.error ? "2px solid red" : "2px solid #33FFCE" };
    font-size: medium;
    padding: 0.25em 0.5em;

    @media (max-width: 415px) {
        //align-items: center;
        //padding: 0.5vh 0.5vw;
    }

    :focus{
        border: 2px solid black;
        font-size: large;
    }

    ::placeholder{
        font-size: medium;
    }
    

`;

export const Checkboxfield = styled.input.attrs({type:"checkbox"})`
    border: 2px solid #33FFCE;
    height: 24px;

    :selected{
        color: #33FFCE;
    }
`;


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 72px;
    width: 100%;
`;