import { ChangeEvent } from 'react';
import { InputWrapper } from './styles'

interface InputContainerProps {
  title: string;
  type: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function InputContainer({title, type, value, onChange}: InputContainerProps) {
  return (
    <InputWrapper>
      <label>{title}</label>
      <input type={type} value={value} onChange={onChange}/>
    </InputWrapper>
)}