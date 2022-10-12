import { Button, FormLabel, Input, VStack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema, Schema } from "../utils/validations/schema";
import { LabeledInput } from '../components/LabeledInput';
import Router from 'next/router';

const Home: NextPage = () => {

  // interface FromContent {
  //   email: string;
  //   password: string;
  // }

  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors }, 
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    reset();

    Router.push('/test');
  };

  return (
    <VStack>
      <VStack w='30vw'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormLabel htmlFor='email'>Email address</FormLabel>
          <Input id='email' type='email' {...register('email')} />
          <Text color='red.400'>{errors.email && errors.email.message}</Text>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <Input id='password' type='password' {...register('password')} />
          <Text color='red.400'>{errors.password && errors.password.message}</Text>

          {/* <LabeledInput 
            name='email'
            label='Email'
            type='email'
            errorMessage={errors.email && errors.email.message}
          /> */}
          <Button type='submit'>登録</Button>
        </form>
      </VStack>
    </VStack>
  )
}

export default Home
