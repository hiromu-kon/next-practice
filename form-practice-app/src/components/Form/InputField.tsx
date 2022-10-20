import { Input } from '@chakra-ui/react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapper } from './FieldWrapper';

type Props = {
  label: string;
  type?: 'text' | 'email' | 'password';
  registration: Partial<UseFormRegisterReturn>;
  error?: FieldError | undefined;
};

/**
 * InputField
 * 
 * @param props.label
 * @param props.type
 * @param props.registration
 * @param props.error
 * @returns
 */
export const InputField = (props: Props) => {
  const { type = 'text', label, registration, error } = props;
  return (
    <FieldWrapper label={label} error={error}>
      <Input
        id={label}
        type={type}
        {...registration}
      />
    </FieldWrapper>
  );
};