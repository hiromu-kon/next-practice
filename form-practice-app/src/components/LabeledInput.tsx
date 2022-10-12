import { FormLabel, Input, Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  label: string;
  type: 'text' | 'password' | 'email' | 'number',
  errorMessage: string | undefined;
}

/**
 * LabeledInput
 *
 * @param props.name
 * @param props.label
 * @param props.type
 * @param props.errorMessage
 * @returns 
 */
export const LabeledInput = (props: Props) => {
  const { 
    name, 
    label, 
    type, 
    errorMessage,
  } = props;

  const {
    register,
    formState: { isSubmitting, errors },
  } = useFormContext()
  
  return (
    <div>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input id={name} type={type} {...register(name)} />
      <Text color='red.400'>{errorMessage}</Text>
    </div>
  );
}