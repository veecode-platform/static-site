import { Label, InputField, Wrapper, LabelWraper, Checkboxfield, WrapperCheckbox, CheckboxLabel} from "./styles";
import React from 'react'
import { Field } from "formik";

export const Input = ({name, placeholder, label, error}) => {

  return (
    <Field name={name}>
      {({ field }) => (
        <Wrapper>
          <LabelWraper>
            <Label htmlFor={name} error={error}>{label}</Label>
            <Label errorLabel htmlFor={name} error={error}>{error}</Label>
          </LabelWraper>
          <InputField {...field} id={name} name={name} placeholder={placeholder} error={error}/>
        </Wrapper>
      )}
    </Field>
  )
}

export const Checkbox = ({name, error}) => {

  return (
    <Field name={name}>
      {({ field }) => (
        <WrapperCheckbox>       
          <Checkboxfield {...field} id={name} name={name} ></Checkboxfield>
          <CheckboxLabel error={error}>I have read, understood and agree to Veecode Platform&apos;s <a target="_blank" href="/terms-of-service">Terms of service</a> and <a target="_blank" href="/privacy-policy">Privacy policy</a>  </CheckboxLabel>
        </WrapperCheckbox>
      )}
    </Field>
  )
}

