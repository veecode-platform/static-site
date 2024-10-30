"use client";

import {
  Label,
  InputField,
  Wrapper,
  LabelWraper,
  Checkboxfield,
  WrapperCheckbox,
  CheckboxLabel,
  TextAreaField,
  WrapperTextArea,
} from "./styles";
import React from "react";
import { Field } from "formik";
import { CheckboxProps, InputProps, TextAreaProps } from "./types";
import { useTranslations } from "next-intl";

export const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  label,
  error,
}) => {
  return (
    <Field name={name}>
      {({ field }: { field: any }) => (
        <Wrapper>
          <LabelWraper>
            <Label htmlFor={name} $error={error as boolean}>
              {label}
            </Label>
            <Label $errorLabel htmlFor={name} $error={error as boolean}>
              {error}
            </Label>
          </LabelWraper>
          <InputField
            {...field}
            id={name}
            name={name}
            placeholder={placeholder}
            error={error}
          />
        </Wrapper>
      )}
    </Field>
  );
};

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  error,
  children,
  terms,
}) => {
  const t = useTranslations("contactUs.form.terms");

  const termsData = (
    <>
      {t("checkbox1.label")}
      <a target="_blank" href="/terms-of-service">
        {t("checkbox1.linkLabel")}
      </a>{" "}
      {t("checkbox2.label")}
      <a target="_blank" href="/privacy-policy">
        {t("checkbox2.linkLabel")}
      </a>
    </>
  );

  return (
    <Field name={name}>
      {({ field }: { field: any }) => (
        <WrapperCheckbox fullHeight={children ? false : true}>
          <Checkboxfield {...field} id={name} name={name}></Checkboxfield>
          <CheckboxLabel
            altColor={children ? true : false}
            $error={error as boolean}
          >
            {children && <strong>{children}</strong>}
            {terms && termsData}
          </CheckboxLabel>
        </WrapperCheckbox>
      )}
    </Field>
  );
};

export const TextArea: React.FC<TextAreaProps> = ({
  name,
  placeholder,
  error,
  label,
}) => {
  return (
    <Field name={name} type="textarea">
      {({ field }: { field: any }) => (
        <WrapperTextArea>
          <LabelWraper>
            <Label htmlFor={name} $error={error as boolean}>
              {label}
            </Label>
            <Label $errorLabel htmlFor={name} $error={error as boolean}>
              {error}
            </Label>
          </LabelWraper>
          <TextAreaField
            {...field}
            id={name}
            name={name}
            placeholder={placeholder}
            error={error}
          ></TextAreaField>
        </WrapperTextArea>
      )}
    </Field>
  );
};
