import { Label, InputField, Wrapper, LabelWraper, Checkboxfield } from "./styles";
import React from 'react'
import { Field } from "formik";

const Input = ({name, placeholder, label, error}) => {

  return (
    <Field name={name}>
      {({ field, form, meta }) => (
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

export default Input

export const Checkbox = ({name, placeholder, label, error}) => {

  return (
    <Field name={name}>
      {({ field, form, meta }) => (
        <Wrapper>
          <Checkboxfield {...field} id={name} name={name}></Checkboxfield>
        </Wrapper>
      )}
    </Field>
  )
}

