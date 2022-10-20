import { FormLabel, Text } from '@chakra-ui/react';
import * as React from 'react';
import { FieldError } from 'react-hook-form';

type Props = {
  label?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
};

/**
 * FieldWrapper
 * 
 * @param props.label
 * @param props.children
 * @param props.error
 * @returns
 */
export const FieldWrapper = (props: Props) => {
  const { label, error, children } = props;
  return (
    <div>
      <FormLabel htmlFor={label}>
        {label}
        <div>{children}</div>
      </FormLabel>
      {error?.message && (
        <Text color='red.400'>{error.message}</Text>
      )}
    </div>
  );
};
