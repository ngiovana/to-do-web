import { InputWrapper } from './styles'

interface InputContainerProps {
  title: string;
  type: string;
  value?: string;
}

export function InputContainer({title, type, value}: InputContainerProps) {
  return (
    <InputWrapper>
      <label>{title}</label>
      <input type={type} value={value}/>
    </InputWrapper>
)}