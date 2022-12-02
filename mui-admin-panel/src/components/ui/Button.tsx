import MuiButton from '@mui/material/Button';
import { ReactNode } from 'react';

type ButtonProps = {
  variant?: "text" | "outlined" | "contained";
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

/**
 * Button
 * 
 * @param variant
 * @param children
 * @returns 
 */
export const Button = ({variant = 'contained', disabled = false, onClick, children}: ButtonProps) => {
  return <MuiButton variant={variant} disabled={disabled} onClick={onClick}>{children}</MuiButton>
}