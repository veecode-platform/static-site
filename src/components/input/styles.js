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
    color: ${props => props.error ? "#DB0000" : "white" };
    font-size: small;
    min-width: 50%;
    text-align: ${props => props.errorLabel ? "right" : "left"};
`;

export const InputField = styled.input`
    width: 100%;
    border-radius: 4px;
    height: 48px;
    outline: none;
    border: ${props => props.error ? "1px solid #DB0000" : "1px solid #33FFCE" };
    font-size: medium;
    padding: 0.25em 0.5em;

    @media (max-width: 415px) {
        //align-items: center;
        //padding: 0.5vh 0.5vw;
    }

    :focus{
        border: 1px solid #33FFCE;
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
    @media (max-width: 420px) {
        gap: 3vw;
    }
`;

export const Checkboxfield = styled.input.attrs({type:"checkbox"})`
    cursor: pointer;
    width: 1.1vw;
    height: 1.1vw;
    accent-color: #33FFCE;
    @media (max-width: 420px) {
        width: 4vw;
        height: 4vw;
    }
`;

export const CheckboxLabel = styled(Label)`
    font-size: small;
    a{
        text-decoration: underline;
        cursor: pointer
        color: inherit;

        :link, :visited, :hover, :active{
            color: inherit;
        }
    }
`;
