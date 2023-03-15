import { Label, InputField, Wrapper, LabelWraper, Checkboxfield, WrapperCheckbox, CheckboxLabel, TextAreaField, WrapperTextArea} from "./styles";
import React from 'react'
import { Field } from "formik";
import { useTranslation } from 'react-i18next';

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

export const Checkbox = ({name, error, children}) => {
  const { t } = useTranslation();

  const terms = <>{t("I have read, understood and agree to Veecode Platform&apos;s")} <a target="_blank" href="/terms-of-service">{t("Terms of Service")}</a> {t("and")} <a target="_blank" href="/privacy-policy">{t("Privacy Policy")}</a></>

  return (
    <Field name={name}>
      {({ field }) => (
        <WrapperCheckbox fullHeight={children ? false : true}>       
          <Checkboxfield {...field} id={name} name={name}></Checkboxfield>
          <CheckboxLabel altColor={children ? true : false} error={error}>{children ? <strong>{children}</strong> : terms}</CheckboxLabel>
        </WrapperCheckbox>
      )}
    </Field>
  )
}

export const TextArea = ({name, placeholder, error, label}) => {
  return (
    <Field name={name} type="textarea">
      {({ field }) => (
        <WrapperTextArea>
          <LabelWraper>
            <Label htmlFor={name} error={error}>{label}</Label>
            <Label errorLabel htmlFor={name} error={error}>{error}</Label>
          </LabelWraper>
          <TextAreaField {...field} id={name} name={name} placeholder={placeholder} error={error}></TextAreaField>
        </WrapperTextArea>
      )}
    </Field>
  )
}

