import React, { ReactNode } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

interface InputFieldProps {
  id: string;
  name: string;
  value?: string | number;
  defaultValue?: string | number;
  placeholder?: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: React.HTMLInputTypeAttribute;
  helperText?: string | ReactNode;
  rightElement?: React.ReactNode | JSX.Element;
  leftElement?: React.ReactNode | JSX.Element;
  rightAddon?: React.ReactNode | JSX.Element;
  leftAddon?: React.ReactNode | JSX.Element;
  error?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: string | number;
  max?: string | number;
  pattern?: RegExp;
  isDisabled?: boolean;
  autocomplete?: boolean;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const { register } = useFormContext();

  return (
    <FormControl isInvalid={Boolean(props.error)}>
      {props.label && (
        <FormLabel htmlFor={props.id}>
          {props.label}{" "}
          {props.required && (
            <Text color="wool-danger.500" fontWeight="600" as="span">
              *
            </Text>
          )}
        </FormLabel>
      )}
      <InputGroup>
        {props.leftAddon && <InputLeftAddon>{props.leftAddon}</InputLeftAddon>}
        {props.leftElement && (
          <InputLeftElement>{props.leftElement}</InputLeftElement>
        )}
        <Input
          autoComplete={props.autocomplete ? "on" : "off"}
          id={props.id}
          value={props.value}
          placeholder={props.placeholder}
          bg="wool-light"
          borderRadius="12px"
          min={props.min}
          max={props.max}
          type={props.type}
          isDisabled={props.isDisabled}
          {...register(props.id, {
            required: {
              value: !!props.required,
              message: `${props.name} is required`,
            },
            minLength: {
              value: props.minLength ? props.minLength : 0,
              message: `${props.name} must be greater than ${props.minLength} character`,
            },
            maxLength: {
              value: props.maxLength ? props.maxLength : 999,
              message: `${props.name} must be less than ${props.maxLength} character`,
            },
            onChange: props.onChange,
          })}
        />
        {props.rightElement && (
          <InputRightElement>{props.rightElement}</InputRightElement>
        )}
        {props.rightAddon && (
          <InputRightAddon>{props.rightAddon}</InputRightAddon>
        )}
      </InputGroup>
      {props.helperText && <FormHelperText>{props.helperText}</FormHelperText>}
      <FormErrorMessage>{props.error}</FormErrorMessage>
    </FormControl>
  );
};

export default InputField;
