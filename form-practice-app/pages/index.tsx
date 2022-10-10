import { Button, FormLabel, Input, VStack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { FieldValues, useForm } from 'react-hook-form';

const Home: NextPage = () => {

  interface FromContent {
    email: string;
    password: string;
  }

  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors }, 
  } = useForm<FromContent>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    reset();
  };

  return (
    <VStack>
      <VStack w='30vw'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormLabel htmlFor='email'>Email address</FormLabel>
            <Input id='email' type='email' {...register('email', { required: 'Email is Required' })} />
            <Text color='red.400'>{errors.email && errors.email.message}</Text>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input id='password' type='password' {...register('password', { required: 'Password is Required' })} />
            <Text color='red.400'>{errors.password && errors.password.message}</Text>
          <Button type='submit'>登録</Button>
        </form>
      </VStack>
    </VStack>
  )
}

export default Home
