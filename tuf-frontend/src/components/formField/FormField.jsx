import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
  FormErrorMessage,
} from "@chakra-ui/react";

const FormField = ({
  id,
  name,
  type,
  label,
  value,
  onChange,
  isReadOnly,
  isEditable,
  validationError,
  min,
  max,
  ...rest
}) => {
  return (
    <FormControl mb={4} isInvalid={validationError}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      {type === "textarea" ? (
        <Textarea
          id={id}
          name={name}
          placeholder={`Enter ${label.toLowerCase()}`}
          value={value}
          onChange={onChange}
          isReadOnly={!isEditable}
          {...rest}
        />
      ) : type === "checkbox" ? (
        <Checkbox
          id={id}
          name={name}
          isChecked={value}
          onChange={onChange}
          isDisabled={!isEditable}
          {...rest}
        >
          {label}
        </Checkbox>
      ) : (
        <Input
          id={id}
          name={name}
          type={type}
          placeholder={`Enter ${label.toLowerCase()}`}
          value={value}
          onChange={onChange}
          isReadOnly={!isEditable}
          min={min}
          max={max}
          {...rest}
        />
      )}
      <FormErrorMessage>{validationError}</FormErrorMessage>
    </FormControl>
  );
};

export default FormField;
