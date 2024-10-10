import { ReactNode } from "react";

export interface InputProps {
  name: string;
  placeholder: string;
  label: string;
  error?: string | false | undefined;
}

export interface CheckboxProps {
  name: string;
  error?: string | false | undefined;
  terms?: boolean;
  children?: ReactNode;
}

export interface TextAreaProps {
  name: string;
  placeholder: string;
  error?: string | false | undefined;
  label: string;
}

/**
 *  @styles
 */

export interface LabelProps {
  error?: boolean;
  errorLabel?: boolean;
}

export interface InputFieldProps {
  error?: boolean;
}

export interface CheckboxFieldProps {
  fullHeight?: boolean;
}

export interface CheckboxLabelProps {
  altColor?: boolean;
}

export interface TextAreaFieldProps {
  error?: boolean;
}
