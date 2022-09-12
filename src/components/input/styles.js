import styled from 'styled-components';

/*input*/
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 72px;
    width: 100%;
`;

export const LabelWraper = styled.div`
    display: flex;
`;

export const Label = styled.label`
    color: ${props => props.error ? "#F00014" : "white" };
    font-size: small;
    min-width: 50%;
    text-align: ${props => props.errorLabel ? "right" : "left"};
`;

export const InputField = styled.input`
    width: 100%;
    border-radius: 4px;
    height: 48px;
    outline: none;
    border: ${props => props.error ? "2px solid #F00014" : "2px solid #33FFCE" };
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

/*end input*/

/*checkbox*/
export const WrapperCheckbox = styled(Wrapper)`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5vw;
    height: 60px;  
`;

export const Checkboxfield = styled.input.attrs({type:"checkbox"})`
    cursor: pointer;
    width: 1.1vw;
    height: 1.1vw;
    accent-color: #33FFCE;
`;

export const CheckboxLabel = styled(Label)`
    font-size: small;
    a{
        text-decoration: underline;
        cursor: pointer
        color: inherit;

        :link:visited:hover:active{
            color: inherit;
        }
    }
`;
