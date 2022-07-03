import {
  FormErrorMessage,
  FormControl,
  FormLabel,
  Input as TextInput,
  Select as InputSelect,
  InputGroup,
  InputLeftElement
} from "@chakra-ui/react";
import { useField } from "formik";

const Input = ({ label, isRequired, children, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <FormControl
      mb={3}
      isRequired={isRequired}
      isInvalid={meta.touched && meta.error}
    >
      {label && (
        <FormLabel
          mb={2}
          htmlFor={props.id || props.name}
        >
          {label}
        </FormLabel>
      )}
      
      <InputGroup mb={2}>
        <InputLeftElement
          pointerEvents="none"
          children={children}
        />
        <TextInput {...field} {...props} focusBorderColor="primary"/>
      </InputGroup>
      {meta.touched && meta.error ? (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      ) : null}
    </FormControl>
  );
};

export default Input;

export const Select = ({ label,isRequired, children, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <FormControl mb={3} isRequired={isRequired}>
      <FormLabel mb={2} htmlFor={props.id || props.name}>
        {label}
      </FormLabel>
      <InputSelect
        focusBorderColor="primary"
        isInvalid={meta.touched && meta.error ? true : false}
        mb={2}
        {...field}
        {...props}
      >
        {children}
      </InputSelect>
      {meta.touched && meta.error ? (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      ) : null}
    </FormControl>
  );
};
