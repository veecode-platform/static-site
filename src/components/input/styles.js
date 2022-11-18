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
    color: ${props => props.error ? "#DB0000" : "#f3f3f3" };
    font-size: 12px;
    font-weight:500;
    min-width: 50%;
    text-align: ${props => props.errorLabel ? "right" : "left"};
`;

export const InputField = styled.input`
    width: 100%;
    border-radius: 4px;
    height: 48px;
    outline: none;
    background-color: #f3f3f3;
    //color: #FAFAFA;
    border: ${props => props.error ? "1px solid #DB0000" : "1px solid #33FFCE" };
    font-size: 16px;
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
    :-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px #f3fefe inset;
      }
      &:-webkit-autofill {
        -webkit-text-fill-color: #111111 !important;
      }
`;

/*end input*/

/*checkbox*/
export const WrapperCheckbox = styled(Wrapper)`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    column-gap: 0.5vw;
    row-gap: 0vh;
    height: ${props => props.fullHeight ? "60px": "32px" };
    width: ${props => props.fullHeight ? "auto": "49%"};
    @media (max-width: 420px) {
        gap: 3vw;
    }
`;

export const Checkboxfield = styled.input.attrs({type:"checkbox"})`
    cursor: pointer;
    width: 0.8vw;
    height: 0.8vw;
    accent-color: #33FFCE;
    @media (max-width: 420px) {
        width: 4vw;
        height: 4vw;
    }
`;

export const CheckboxLabel = styled(Label)`
    font-size: small;
    color: ${props => props.altColor ? "grey": "inherit"};
    a{
        text-decoration: underline;
        cursor: pointer
        color: inherit;

        :link, :visited, :hover, :active{
            color: inherit;
        }
    }
`;

/*end checkbox*/
export const WrapperTextArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    min-height: 15v;
    width: 100%;
    gap: 0.5vh;
`;

export const TextAreaField = styled.textarea`
    width: 100%;
    border-radius: 4px;
    height: auto;
    min-height: 15vh;
    outline: none;
    border: ${props => props.error ? "1px solid #DB0000" : "1px solid #33FFCE" };
    font-size: 16px;
    padding: 0.25em 0.5em;
    color: #f3f3f3;
    font-family: inherit;
    resize: vertical;
    background-color: #f3f3f3;
    margin-bottom: 1em;

`
