import MuiTextField from '@mui/material/TextField';

type TextFieldProps = {
  id: string;
}

export const TextField = (props: TextFieldProps) => {
  return <MuiTextField {...props} />
}